class RateLimit {
  constructor(name, limit) {
    this.name = name;
    this.limit = limit;
    this.t1 = null;
    this.counter = 0;
  }
}

class RateLimiter {
  constructor(endpoints) {
    this.endpoints = this._constructEndpoints(endpoints);
  }

  _constructEndpoints(endpoints) {
    return endpoints.reduce((acc, curr) => {
      acc[curr.name] = curr;
      return acc;
    }, {});
  }

  canPass(name) {
    const limit = this.endpoints[name];
    if (!limit) throw new Error("Endpoint not setup");
    limit.counter++;

    if (!limit.t1) {
      limit.t1 = new Date();
    }

    const now = new Date();
    if (
      now - limit.t1 <= limit.limit[1] * 1000 &&
      limit.counter > limit.limit[0]
    ) {
      return false;
    }

    if (now - limit.t1 > limit.limit[1] * 1000) {
      limit.counter = 0;
      limit.t1 = now;
    }

    return true;
  }
}

export { RateLimiter, RateLimit };
