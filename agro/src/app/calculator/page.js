'use client';

import { useState } from 'react';

export default function ObsDateCalculator() {
    const [specificPOA, setSpecificPOA] = useState('');

    function calculateSpecificPOA() {
        const inputParts = specificPOA.split(' ');
        if (inputParts.length !== 2) {
            alert('Please enter valid input in the format: Week Days');
            return;
        }

        const week = parseInt(inputParts[0]);
        const days = parseInt(inputParts[1]);

        if (isNaN(week) || isNaN(days)) {
            alert('Please enter valid numbers for Week and Days');
            return;
        }

        const eddInput = document.getElementById('edd').value;
        if (!eddInput) {
            alert('Please enter an EDD');
            return;
        }

        const edd = new Date(eddInput);
        const differenceInDays = week * 7 + days;
        edd.setDate(edd.getDate() - differenceInDays);

        alert('Specific POA date is: ' + formatDate(edd));
    }

    function formatDate(date) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
    }

    return (
        <div className="bg-gray-100 p-6 min-h-screen flex justify-center items-center">
            <div className="max-w-md bg-white p-6 rounded-lg shadow-md w-full">
                <h1 className="text-2xl font-bold text-center mb-4">Obs Date Calculator</h1>
                
                <div className="mb-4">
                    <label htmlFor="lmp" className="block font-medium">LMP (Last Menstruation Period)</label>
                    <input type="date" id="lmp" className="w-full p-2 border rounded-md" />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="edd" className="block font-medium">EDD (Estimated Due Date)</label>
                    <input type="date" id="edd" className="w-full p-2 border rounded-md" />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="currentWeek" className="block font-medium">Current Week</label>
                    <input type="text" id="currentWeek" className="w-full p-2 border rounded-md bg-gray-100" readOnly />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="currentDays" className="block font-medium">Days</label>
                    <input type="text" id="currentDays" className="w-full p-2 border rounded-md bg-gray-100" readOnly />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="specificPOA" className="block font-medium">Specific POA</label>
                    <div className="flex gap-2">
                        <input 
                            type="text" 
                            id="specificPOA" 
                            placeholder="Enter Week and Days" 
                            className="w-full p-2 border rounded-md" 
                            value={specificPOA} 
                            onChange={(e) => setSpecificPOA(e.target.value)}
                        />
                        <button 
                            onClick={calculateSpecificPOA} 
                            className="bg-blue-500 text-white px-4 py-2 rounded-md"
                        >
                            Calculate
                        </button>
                    </div>
                </div>
                
                <div className="mb-4">
                    <label htmlFor="weeks28" className="block font-medium">Corresponding Date for 28 Weeks</label>
                    <input type="text" id="weeks28" className="w-full p-2 border rounded-md bg-gray-100" readOnly />
                </div>
            </div>
        </div>
    );
}