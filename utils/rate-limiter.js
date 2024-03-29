class RateLimit {
  constructor(name, maxRequests, timeLimit) {
    this.name = name;
    this.maxRequests = maxRequests;
    this.previousRequest = null;
    this.counter = 0;
    // convert to milliseconds
    this.timeLimitMs = timeLimit * 1000;
  }
}

class RateLimiter {
  constructor(endpoints = []) {
    this.endpoints = this._constructEndpointMap(endpoints);
  }

  _constructEndpointMap(endpoints) {
    return endpoints.reduce((acc, curr) => {
      acc[curr.name] = curr;
      return acc;
    }, {});
  }

  _isWithinTimeLimit(rateLimit, requestTime) {
    return requestTime - rateLimit.previousRequest <= rateLimit.timeLimitMs;
  }

  _isWithinRequestLimit(rateLimit) {
    return rateLimit.counter <= rateLimit.maxRequests;
  }

  canPass(name) {
    const limit = this.endpoints[name];
    if (!limit) throw new Error("Endpoint not setup");

    // increment request counter
    limit.counter++;

    if (!limit.previousRequest) {
      // first request
      limit.previousRequest = new Date();
      return true;
    }

    if (!this._isWithinRequestLimit(limit)) {
      const currentRequest = new Date();
      if (!this._isWithinTimeLimit(limit, currentRequest)) {
        // latest request is outside (greater than) time limit
        limit.counter = 0;
        limit.previousRequest = currentRequest;
        return true;
      } else {
        // too many requests within time limit
        limit.previousRequest = currentRequest;
        return false;
      }
    } else {
      return true;
    }
  }
}

export { RateLimiter, RateLimit };
