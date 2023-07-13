var urls = [
    { url: 'order-service/openapi.yml', name: 'Order Service' },
    { url: 'account-service/openapi.yml', name: 'Account Service' }
  ];
  
  var specUrls = {};
  urls.forEach(function(item) {
    specUrls[item.name] = item.url;
  });
  
  window.swaggerConfig = {
    urls: specUrls
  };
  