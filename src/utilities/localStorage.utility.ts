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

export const load = (item: string): string | null => {
    try {
        return localStorage.getItem(item);
    } catch (err) {
        return null;
    }
};
export const save = (item: string, data: string) => {
    try {
        localStorage.setItem(item, data);
    } catch (err) {
        //Ignore write when is error
    }
};
export const loadObject = <T = unknown>(item: string) => {
    try {
        const serializedState = localStorage.getItem(item);
        return serializedState ? (JSON.parse(serializedState) as T) : null;
    } catch (err) {
        return null;
    }
};
export const saveObject = <T = unknown>(item: string, state: T) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(item, serializedState);
    } catch (err) {
        //Ignore write when is error
    }
};
export const deleteItem = (item: string) => {
    try {
        localStorage.removeItem(item);
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
