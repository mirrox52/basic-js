const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if(value === null) 
    {
      value = 'null';
    }
    this.chain.push(value);
    return this;
  },

  removeLink(position) {
    if ((position < 1) || (position >= this.chain.length) || (typeof position !== 'number'))
    {
      this.chain = [];
      throw new Error('');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = `( ${this.chain.join(" )~~( ")} )`;
    this.chain = [];
    return str;
  }
};

module.exports = chainMaker;