♦ Lozenge
==========

Diamond inheritance with ES6 Proxies.

As of writing work only on Firefox.

```
$ npm install lozenge
```


Usage
-----

```js
class Worker {
  help() { console.log(`${this.name} is helping`); }
}

class Person {
  say() { console.log(`Hi! I’m ${this.name}!`); }
}

class TeamMember extends Lozange.of(Worker, Person) {
  constructor(name) {
    this.name = name;
  }
}

var mario = new TeamMember('Mario');

mario.help(); // Mario is helping
mario.say();  // Hi! I’m Mario!

Person.prototype.say = function () {
  console.log(`It’sa me, ${this.name}!`);
};

mario.say();  // It’sa me, Mario!
```


License
-------

This library, *lozenge*, is free software ("Licensed Software"); you can
redistribute it and/or modify it under the terms of the [GNU Lesser General
Public License](http://www.gnu.org/licenses/lgpl-2.1.html) as published by the
Free Software Foundation; either version 2.1 of the License, or (at your
  option) any later version.

  This library is distributed in the hope that it will be useful, but WITHOUT ANY
  WARRANTY; including but not limited to, the implied warranty of MERCHANTABILITY,
  NONINFRINGEMENT, or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
  Public License for more details.

  You should have received a copy of the [GNU Lesser General Public
  License](http://www.gnu.org/licenses/lgpl-2.1.html) along with this library; if
  not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth
  Floor, Boston, MA 02110-1301 USA
