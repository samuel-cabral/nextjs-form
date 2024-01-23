'use client'

import {
  FormControl,
  FormHelperText,
  FormLabel,
  TextField,
  TextFieldProps,
} from '@mui/material'
import { FieldError } from 'react-hook-form'

type InputProps = TextFieldProps & {
  error?: FieldError
}

export function Input({
  label,
  name,
  error = undefined,
  helperText,
  ...rest
}: InputProps) {
  return (
    <FormControl>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <TextField id={name} name={name} error={!!error} {...rest} />

      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}
