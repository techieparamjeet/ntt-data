export const environment = {
  production: true,
  local : {
    BASE_URL : 'http://localhost:8080/'
  },
  dev : {
    //BASE_URL : 'http://localhost:8080/'
  },
  prod : {
    //BASE_URL : 'http://localhost:8080/'
  }
};

export function environmentConfig(){
  switch (window.location.hostname) {
    case 'localhost' :
      return environment.local;
  }
}
