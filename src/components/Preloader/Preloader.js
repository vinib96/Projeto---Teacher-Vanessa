function Preloader() {
  return (
    <>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      <title>preloader</title>
      <link rel='stylesheet' href='./preloader.css' />
      <div className='preloader'>
        {' '}
        <i className='preloader__circle' />
        <span className='preloader__text'>Loading Quiz...</span>
      </div>
    </>
  );
}

export default Preloader;
