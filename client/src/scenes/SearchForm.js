import React from 'react'

// hooks
import useForm from 'react-hook-form'

// components
import Label from '../components/Label'
import Input from '../components/Input'

const SearchForm = props => {
  const { handleSearch } = props
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => handleSearch(data)

  return (
    // "handleSubmit" will validate your inputs before invoking "onSubmit"
    // register your input into the hook by invoking the "register" function
    // include validation with required or other standard HTML validation rules
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label>Artist</Label>
      <Input name="artist" ref={register({ required: true })} />
      {/* errors will return when field validation fails */}
      {errors.artist && <span>This field is required.</span>}
      <input type="submit" value="Search" />
    </form>
  )
}

export default SearchForm
