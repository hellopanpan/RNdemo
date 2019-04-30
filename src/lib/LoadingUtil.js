let LoadingUtil = {
  showLoading(msg, time){
    global.mLoadingComponentRef && global.mLoadingComponentRef.showLoading(msg, time);
  },
  dismissLoading(){
    global.mLoadingComponentRef && global.mLoadingComponentRef.dismissLoading();
  },
};

export default LoadingUtil;