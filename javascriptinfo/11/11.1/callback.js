/* function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(script);
  
    document.head.append(script);
  } */

 /*  function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
  }
  
  loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
    alert(`Cool, the script ${script.src} is loaded`);
    alert( _ ); // _ is a function declared in the loaded script
  }); */

/*   Callback in callback
How can we load two scripts sequentially: the first one, and then the second one after it?

The natural solution would be to put the second loadScript call inside the callback, like this:

loadScript('/my/script.js', function(script) {

  alert(`Cool, the ${script.src} is loaded, let's load one more`);

  loadScript('/my/script2.js', function(script) {
    alert(`Cool, the second script is loaded`);
  });

}); */

/* After the outer loadScript is complete, the callback initiates the inner one.

What if we want one more script…?

loadScript('/my/script.js', function(script) {

  loadScript('/my/script2.js', function(script) {

    loadScript('/my/script3.js', function(script) {
      // ...continue after all scripts are loaded
    });

  });

}); */

//for errors this is done
/* function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
  
    document.head.append(script);
  } */

/*   loadScript('/my/script.js', function(error, script) {
    if (error) {
      // handle error
    } else {
      // script loaded successfully
    }
  }); */

/*   Pyramid of Doom
At first glance, it looks like a viable approach to asynchronous coding. And indeed it is. For one or maybe two nested calls it looks fine.

But for multiple asynchronous actions that follow one after another, we’ll have code like this:

loadScript('1.js', function(error, script) {

  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', function(error, script) {
      if (error) {
        handleError(error);
      } else {
        // ...
        loadScript('3.js', function(error, script) {
          if (error) {
            handleError(error);
          } else {
            // ...continue after all scripts are loaded (*)
          }
        });

      }
    });
  }
}); */

