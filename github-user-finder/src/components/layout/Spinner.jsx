import spinnerImage from './assets/spinner.gif'
function Spinner() {
  return (
    <div className='w-100 mt-20'>
        <img src={spinnerImage} className='text-center mx-auto' alt="Loading..." width={180} />
    </div>
  )
}

export default Spinner