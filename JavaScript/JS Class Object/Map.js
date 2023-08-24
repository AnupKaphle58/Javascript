// The Map object holds key-value pairs and remembers the original insertion order of the keys.
// Any value (both objects and primitive values) may be used as either a key or a value.

const map1 = new Map();

map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

console.log(map1.get("a"));
// Expected output: 1

map1.set("a", 97);

console.log(map1.get("a"));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete("b");

console.log(map1.size);
// Expected output: 2

// 	                        Map	                                                                          Object
// 1) Accidental Keys:	A Map does not contain any keys by default.      1) An Object has a prototype, so it contains default keys that could collide with your own keys if you're not careful.
//    It only contains what is explicitly put into it.

// 2) Security:	A Map is safe to use with user-provided keys and values.  2) Setting user-provided key-value pairs on an Object may allow an attacker to override the object's prototype, which can lead to object injection attacks .
//                                                                             Like the accidental keys issue, this can also be mitigated by using a null-prototype object.

// 3) Performance:  Performs better in scenarios involving frequent       3) Not optimized for frequent additions and removals of key-value pairs.
// additions and removals of key-value pairs.

// 4) Serialization and parsing: No native support for serialization         4) Native support for serialization from Object to JSON, using JSON.stringify().
// or parsing

const contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Jessie"); // true
contacts.get("Hilary"); // undefined
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete("Raymond"); // false
contacts.delete("Jessie"); // true
console.log(contacts.size); // 1

// Instance methods

// Map.prototype.clear()
// Removes all key-value pairs from the Map object.

// Map.prototype.delete()
// Returns true if an element in the Map object existed and has been removed, or false if the element does not exist.
// map.has(key) will return false afterwards.

// Map.prototype.entries()
// Returns a new Iterator object that contains a two-member array of [key, value] for each element in the Map object in insertion order.

// Map.prototype.get()
// Returns the value associated to the passed key, or undefined if there is none.

// Map.prototype.has()
// Returns a boolean indicating whether a value has been associated with the passed key in the Map object or not.

// Map.prototype.keys()
// Returns a new Iterator object that contains the keys for each element in the Map object in insertion order.

// Map.prototype.set()
// Sets the value for the passed key in the Map object. Returns the Map object.

// Map.prototype.values()
// Returns a new Iterator object that contains the values for each element in the Map object in insertion order.

const first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

// Merge two maps. The last repeated key wins.
// Spread syntax essentially converts a Map to an Array
const merged = new Map([...first, ...second]);

console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
