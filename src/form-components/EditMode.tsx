import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <div className="form-switch">
                <label>
                    Edit Mode
                    <input
                        type="checkbox"
                        checked={isEditMode}
                        onChange={() => setIsEditMode(!isEditMode)}
                    />
                </label>
            </div>
            {isEditMode ? (
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={(e) => setIsStudent(e.target.checked)}
                        />
                        Student
                    </label>
                </div>
            ) : (
                <>
                    <p>{name} is {isStudent ? "a student" : "not a student"}.</p>
                    <input type="hidden" />
                </>
            )}
        </div>
    );
}
