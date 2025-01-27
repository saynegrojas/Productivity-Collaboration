import { CircularProgress } from '@mui/material';

const LoadingSpinner = () => (
  <div className='flex justify-center items-center'>
    <CircularProgress size={20} sx={{ margin: 'auto' }} />
  </div>
);

export default LoadingSpinner;
