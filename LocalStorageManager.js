class LocalStorageManager {

    setItem(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Error setting item in local storage:', error);
        }
    }


    getItem(key) {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        } catch (error) {
            console.error('Error getting item from local storage:', error);
            return null;
        }
    }


    updateItem(key, value) {
        if (localStorage.getItem(key) !== null) {
            this.setItem(key, value);
        } else {
            console.warn(`Item with key "${key}" does not exist in local storage.`);
        }
    }


    removeItem(key) {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error('Error removing item from local storage:', error);
        }
    }

    // Clear all items from local storage
    clear() {
        try {
            localStorage.clear();
        } catch (error) {
            console.error('Error clearing local storage:', error);
        }
    }

    // Get all keys from local storage
    getAllKeys() {
        const keys = [];
        for (let i = 0; i < localStorage.length; i++) {
            keys.push(localStorage.key(i));
        }
        return keys;
    }
}
