const storage = new LocalStorageManager();

function testLocalStorage() {

    storage.setItem('user', { name: 'Alice', age: 30 });
    document.getElementById('output').innerText = 'User stored: ' + JSON.stringify(storage.getItem('user'));


    storage.updateItem('user', { name: 'Alice', age: 31 });
    document.getElementById('output').innerText += '\nUser updated: ' + JSON.stringify(storage.getItem('user'));


    storage.removeItem('user');
    document.getElementById('output').innerText += '\nUser after removal: ' + JSON.stringify(storage.getItem('user'));


    storage.setItem('item1', 'value1');
    storage.setItem('item2', 'value2');
    document.getElementById('output').innerText += '\nAll Keys: ' + JSON.stringify(storage.getAllKeys());


    storage.clear();
    document.getElementById('output').innerText += '\nAfter clearing: ' + JSON.stringify(storage.getAllKeys());
}
