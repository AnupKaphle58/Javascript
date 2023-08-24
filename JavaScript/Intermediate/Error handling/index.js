// The “try…..catch”:
// Syntax:
try {
  //code
} catch (error) {
  //error handling
}

// Here, first the code inside the try block is executed. If there are no errors then catch(err) is ignored: the execution reaches at the end of try and goes on, skipping catch(err).
// If the error occurs, then the try execution is skipped and control flow goes to the beginning of the catch(err) block. The err variable (we can use any name for it) will contain an error object with details about what happened.

function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch (e) {
    console.log(1);
    // This return statement is suspended
    // until finally block has completed
    return true;
    console.log(2); // not reachable
  } finally {
    console.log(3);
    return false; // overwrites the previous "return"
    console.log(4); // not reachable
  }
  // "return false" is executed now
  console.log(5); // not reachable
}
console.log(f());
