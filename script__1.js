const xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan </first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр </first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`


let result = {
    list: []
};
const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelectorAll("student");

for (let student of studentNode) {

    let nameNode = student.querySelector('name');

    let name = nameNode.querySelector('first').textContent + nameNode.querySelector('second').textContent;
    let age = student.querySelector('age').textContent;
    let prof = student.querySelector('prof').textContent;
    let lang = nameNode.getAttribute('lang');

    result.list.push({
        name: name,
        age: age,
        prof: prof,
        lang: lang
    });
}

console.log(result);