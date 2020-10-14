
export const required = value => {
   return value ? undefined : 'field is required'
} 
export const maxLengthCreator = max => value => {
   return value && value.length > max ? `Max length is ${max} symbols` : undefined
}


