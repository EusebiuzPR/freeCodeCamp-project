const normalizeUnits = (manifest) => {
    const newManifest = { ...manifest };
    if (newManifest.unit === "lb") {
        newManifest.weight = newManifest.weight * 0.45;
        newManifest.unit = "kg";
    }
    return newManifest;
};

const validateManifest = (manifest) => {
    let errors = {};

    if (manifest.containerId === undefined) {
        errors.containerId = "Missing";
    } else if (
        typeof manifest.containerId !== "number" ||
        !Number.isInteger(manifest.containerId) ||
        manifest.containerId <= 0
    ) {
        errors.containerId = "Invalid";
    }

    if (manifest.destination === undefined) {
        errors.destination = "Missing";
    } else if (typeof manifest.destination !== "string") {
        errors.destination = "Invalid";
    } else if (manifest.destination.trim() === "") {
        errors.destination = "Invalid";
    }

    if (manifest.weight === undefined) {
        errors.weight = "Missing";
    } else if (
        typeof manifest.weight !== "number" ||
        Number.isNaN(manifest.weight) ||
        manifest.weight <= 0
    ) {
        errors.weight = "Invalid";
    }

    if (manifest.unit === undefined) {
        errors.unit = "Missing";
    } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
        errors.unit = "Invalid";
    }

    if (manifest.hazmat === undefined) {
        errors.hazmat = "Missing";
    } else if (typeof manifest.hazmat !== "boolean") {
        errors.hazmat = "Invalid";
    }

    return errors;
};

const processManifest = (manifest) => {
    const errors = validateManifest(manifest);

    if (Object.keys(errors).length === 0) {
        const normalize = normalizeUnits(manifest);
        console.log(`Validation success: ${manifest.containerId}`);
        console.log(`Total weight: ${normalize.weight} kg`);
    } else {
        console.log(`Validation error: ${manifest.containerId}`);
        console.log(validateManifest(manifest));
    }
};
