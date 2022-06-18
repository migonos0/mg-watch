// MIT License

// Copyright (c) 2021 Team SGSI

// Permission is hereby granted, free of charge, to unknown person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF unknown KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR unknown CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

export const getItem = (key: string): string | null => {
    try {
        return localStorage.getItem(key);
    } catch (err) {
        return null;
    }
};
export const setItem = (key: string, value: string) => {
    try {
        localStorage.setItem(key, value);
    } catch (err) {
        //Ignore write when is error
    }
};
export const isItemSet = (key: string) => {
    return getItem(key) !== null;
};
export const getObject = <T = unknown>(key: string): T | null => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState ? JSON.parse(serializedState) : null;
    } catch (err) {
        return null;
    }
};
export const setObject = <T = unknown>(key: string, value: T) => {
    try {
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(key, serializedValue);
    } catch (err) {
        //Ignore write when is error
    }
};
export const removeItem = (key: string) => {
    try {
        localStorage.removeItem(key);
    } catch (err) {
        //Ignore write when is error
    }
};

export const clear = () => {
    try {
        localStorage.clear();
    } catch (err) {
        //Ignore write when is error
    }
};
