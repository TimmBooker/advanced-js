// <<: without
function getAFlow() {
  var val = {};
  var prom1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log("hi");
      resolve(5);
    }, 1000);
  });
  prom1
    .then(function(data) {
      val.data1 = data;
      return new Promise(function(resolve) {
        setTimeout(function() {
          console.log("step 2");
          resolve(2);
        }, 1000);
      });
    })
    .then(function(data) {
      val.data2 = data;
      console.log("end of promises", val);
    });
  console.log("end of flow", val);
}
// :>>

// <<: with
async function getAFlow() {
  var val = {};
  val.data1 = await new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log("hi");
      resolve(5);
    }, 1000);
  });
  val.data2 = await new Promise(function(resolve) {
    setTimeout(function() {
      console.log("step 2");
      resolve(2);
    }, 1000);
  });
  console.log("end of flow", val);
}
// :>>
