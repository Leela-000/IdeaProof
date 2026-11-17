// Reusable form-validation helpers
// These will also be used by the future backend integration layer.

/**
 * Validate a single field value.
 * Returns an error string or null if valid.
 */
export function validateField(name, value, options = {}) {
  const v = typeof value === 'string' ? value.trim() : value

  switch (name) {
    case 'description': {
      if (!v) return 'Please describe your startup idea — even a rough draft works!'
      if (v.length < 20) return 'A little more detail helps. Try to write at least 20 characters.'
      if (v.length > 2000) return 'Please keep the description under 2000 characters.'
      return null
    }
    case 'name': {
      if (options.required && !v) return 'Please give your idea a name.'
      if (v && v.length > 100) return 'Keep the name under 100 characters.'
      return null
    }
    case 'problem': {
      if (options.required && !v) return 'Please describe the problem you want to solve.'
      if (v && v.length < 10) return 'Please expand on the problem a little more.'
      return null
    }
    case 'solution': {
      if (options.required && !v) return 'Please describe your proposed solution.'
      return null
    }
    case 'audience': {
      if (options.required && !v) return 'Please describe who would use this product.'
      return null
    }
    default:
      return null
  }
}

/**
 * Validate the entire quick-mode form.
 * Returns an errors object { fieldName: errorString | null }.
 */
export function validateQuickForm(values) {
  return {
    description: validateField('description', values.description),
    name:        validateField('name', values.name),
    industry:    null,
  }
}

/**
 * Validate the entire guided-mode form.
 */
export function validateGuidedForm(values) {
  return {
    name:        validateField('name', values.name, { required: true }),
    description: validateField('description', values.description),
    problem:     validateField('problem', values.problem, { required: true }),
    solution:    validateField('solution', values.solution, { required: true }),
    audience:    validateField('audience', values.audience, { required: true }),
    industry:    null,
  }
}

/**
 * Returns true if all values in the errors object are null.
 */
export function isFormValid(errors) {
  return Object.values(errors).every(e => e === null)
}

/**
 * Character count helper with status.
 */
export function charCountStatus(value, max) {
  const len = (value || '').length
  if (len > max)              return { count: len, status: 'over' }
  if (len > max * 0.85)       return { count: len, status: 'warning' }
  return                             { count: len, status: 'ok' }
}
