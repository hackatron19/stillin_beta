
const LoadingComponent = ({initialized,children}) => {
  if(initialized===false){
    return 'Loading...';
  }
  return children;
};

export default LoadingComponent;
