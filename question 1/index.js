// Define the function
const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject("Input is not an array.");
            return;
        }

        const filteredAndLowercased = mixedArray
            .filter((item) => typeof item === "string")
            .map((word) => word.toLowerCase());

        if (filteredAndLowercased.length === 0) {
            reject("No valid strings found in the array.");
        } else {
            resolve(filteredAndLowercased);
        }
    });
};

// Example usage:
const mixedArray = [12, "PIZZA", "WINGS", 42, "JavaScript", true];
lowerCaseWords(mixedArray)
    .then((result) => {
        console.log("Lowercased words:", result);
    })
    .catch((error) => {
        console.error("Error:", error);
    });