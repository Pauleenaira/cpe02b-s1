class ValidationError extends Error {
    constructor(fields) {
        super();
        this.fields = fields;
    }
}

function validateSchema(data, schema) {
    // Code Here
}

function safeValidate(data, schema) {
    // Code Here
}

// Test Code
const userSchema = { name: 'string', age: 'number', active: 'boolean' };
const userData = { name: 'Alice', age: 'thirty', active: 1 };
console.log(safeValidate(userData, userSchema));























class ValidationError extends Error {
    constructor(fields) {
      super();
      this.fields = fields;
    }
  }
  
  function validateSchema(data, schema) {
    const invalidFields = [];
    for (const key in schema) {
      if (!(key in data) || typeof data[key] !== schema[key]) {
        invalidFields.push(key);
      }
    }
    if (invalidFields.length > 0) throw new ValidationError(invalidFields);
  }
  
  function safeValidate(data, schema) {
    try {
      validateSchema(data, schema);
    } catch (e) {
      if (e instanceof ValidationError) return e.fields.join(', ');
    }
  }
  