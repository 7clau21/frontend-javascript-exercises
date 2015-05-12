 module.exports.createCourse = function (title, duration, students) {
   course = {
     title: title,
     duration: duration,
     students: students
   };

   return course;
   
 }

module.exports.addProperty = function(object, newProp, newValue) {
 /*if (object[newProp] === undefined) {
    object[newProp] = newValue;
  }
  return object;*/
  object = {};
  object.property = newProp;
  object.value = newValue;
  return object;
};



module.exports.formLetter = function(letter) {
return "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender;
}

    

module.exports.canIGet = function (item, money) {
  
};