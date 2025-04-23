'use client';

import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function ObsDateCalculator() {
    const [lmp, setLmp] = useState('');
    const [edd, setEdd] = useState('');
    const [currentWeek, setCurrentWeek] = useState('');
    const [currentDays, setCurrentDays] = useState('');
    const [specificPOA, setSpecificPOA] = useState('');
    const [specificPOAResult, setSpecificPOAResult] = useState('');
    const [weeks28Date, setWeeks28Date] = useState('');
    const [notification, setNotification] = useState({ show: false, message: '', type: '' });

    // Calculate EDD from LMP - standard 280 days (40 weeks) from LMP
    useEffect(() => {
        if (lmp) {
            const lmpDate = new Date(lmp);
            const calculatedEdd = new Date(lmpDate);
            calculatedEdd.setDate(lmpDate.getDate() + 280);
            setEdd(formatDateForInput(calculatedEdd));
            calculateCurrentPOA(lmpDate);
        }
    }, [lmp]);

    // Calculate LMP from EDD - going back 280 days (40 weeks) from EDD
    useEffect(() => {
        if (edd && !lmp) {
            const eddDate = new Date(edd);
            const calculatedLmp = new Date(eddDate);
            calculatedLmp.setDate(eddDate.getDate() - 280);
            setLmp(formatDateForInput(calculatedLmp));
        }
    }, [edd]);

    // Calculate current POA (Period of Amenorrhea) based on LMP
    const calculateCurrentPOA = (lmpDate) => {
        if (!lmpDate) return;
        
        const today = new Date();
        const diffTime = Math.abs(today - lmpDate);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        const weeks = Math.floor(diffDays / 7);
        const days = diffDays % 7;
        
        setCurrentWeek(weeks.toString());
        setCurrentDays(days.toString());
        
        // Calculate 28 weeks date
        const weeks28 = new Date(lmpDate);
        weeks28.setDate(lmpDate.getDate() + (28 * 7));
        setWeeks28Date(formatDate(weeks28));
    };

    // Calculate specific POA date
    const calculateSpecificPOA = () => {
        const inputParts = specificPOA.split(' ');
        if (inputParts.length !== 2) {
            showNotification('Please enter valid input in the format: Week Days (e.g., "20 3" for 20 weeks and 3 days)', 'error');
            return;
        }

        const week = parseInt(inputParts[0]);
        const days = parseInt(inputParts[1]);

        if (isNaN(week) || isNaN(days) || week < 0 || days < 0 || days > 6) {
            showNotification('Please enter valid numbers for Week (≥ 0) and Days (0-6)', 'error');
            return;
        }

        if (!edd) {
            showNotification('Please enter an EDD or LMP first', 'error');
            return;
        }

        // Calculate the date that corresponds to the given POA
        const eddDate = new Date(edd);
        const differenceInDays = week * 7 + days;
        const specificDate = new Date(eddDate);
        specificDate.setDate(eddDate.getDate() - (280 - differenceInDays));
        
        setSpecificPOAResult(formatDate(specificDate));
        showNotification(`The date corresponding to ${week} weeks and ${days} days is ${formatDate(specificDate)}`, 'success');
    };

    // Show notification
    const showNotification = (message, type) => {
        setNotification({ show: true, message, type });
        setTimeout(() => {
            setNotification({ show: false, message: '', type: '' });
        }, 5000);
    };

    // Format date for display
    function formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    // Format date for input type="date"
    function formatDateForInput(date) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
    }

    // Reset all form fields
    const resetForm = () => {
        setLmp('');
        setEdd('');
        setCurrentWeek('');
        setCurrentDays('');
        setSpecificPOA('');
        setSpecificPOAResult('');
        setWeeks28Date('');
    };

    return (
        <>
            <NavBar />
            <div className="bg-gray-100 py-12 px-4 min-h-screen">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-green-700 text-white p-6">
                            <h1 className="text-3xl font-bold text-center">Obstetric Date Calculator</h1>
                            <p className="text-center mt-2 text-green-100">Calculate pregnancy dates and period of amenorrhea (POA)</p>
                        </div>
                        
                        {/* Notification */}
                        {notification.show && (
                            <div className={`p-4 ${notification.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                                {notification.message}
                            </div>
                        )}
                        
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Basic Information</h2>
                                    
                                    <div className="mb-4">
                                        <label htmlFor="lmp" className="block font-medium text-gray-700 mb-1">
                                            LMP (Last Menstruation Period)
                                        </label>
                                        <input 
                                            type="date" 
                                            id="lmp" 
                                            value={lmp}
                                            onChange={(e) => setLmp(e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" 
                                        />
                                        <p className="text-sm text-gray-500 mt-1">First day of the last menstrual period</p>
                                    </div>
                                    
                                    <div className="mb-4">
                                        <label htmlFor="edd" className="block font-medium text-gray-700 mb-1">
                                            EDD (Estimated Due Date)
                                        </label>
                                        <input 
                                            type="date" 
                                            id="edd" 
                                            value={edd}
                                            onChange={(e) => setEdd(e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" 
                                        />
                                        <p className="text-sm text-gray-500 mt-1">Expected date of delivery</p>
                                    </div>
                                </div>
                                
                                <div>
                                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Current Status</h2>
                                    
                                    <div className="mb-4">
                                        <label htmlFor="currentWeek" className="block font-medium text-gray-700 mb-1">
                                            Current POA (Weeks)
                                        </label>
                                        <input 
                                            type="text" 
                                            id="currentWeek" 
                                            value={currentWeek}
                                            className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 shadow-sm" 
                                            readOnly 
                                        />
                                    </div>
                                    
                                    <div className="mb-4">
                                        <label htmlFor="currentDays" className="block font-medium text-gray-700 mb-1">
                                            Days
                                        </label>
                                        <input 
                                            type="text" 
                                            id="currentDays" 
                                            value={currentDays}
                                            className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 shadow-sm" 
                                            readOnly 
                                        />
                                    </div>
                                    
                                    <div className="mb-4">
                                        <label htmlFor="weeks28" className="block font-medium text-gray-700 mb-1">
                                            28 Weeks Date
                                        </label>
                                        <input 
                                            type="text" 
                                            id="weeks28" 
                                            value={weeks28Date}
                                            className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 shadow-sm" 
                                            readOnly 
                                        />
                                        <p className="text-sm text-gray-500 mt-1">Date at 28 weeks of pregnancy</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-6 border-t border-gray-200 pt-6">
                                <h2 className="text-xl font-semibold mb-4 text-gray-800">Specific POA Calculator</h2>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="md:col-span-2">
                                        <label htmlFor="specificPOA" className="block font-medium text-gray-700 mb-1">
                                            Enter Week and Days
                                        </label>
                                        <div className="flex gap-2">
                                            <input 
                                                type="text" 
                                                id="specificPOA" 
                                                placeholder="e.g., 20 3 (for 20 weeks 3 days)" 
                                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" 
                                                value={specificPOA} 
                                                onChange={(e) => setSpecificPOA(e.target.value)}
                                            />
                                            <button 
                                                onClick={calculateSpecificPOA} 
                                                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow-sm transition-colors duration-300"
                                            >
                                                Calculate
                                            </button>
                                        </div>
                                        <p className="text-sm text-gray-500 mt-1">Format: "weeks days" (e.g., "20 3" for 20 weeks and 3 days)</p>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="specificPOAResult" className="block font-medium text-gray-700 mb-1">
                                            Corresponding Date
                                        </label>
                                        <input 
                                            type="text" 
                                            id="specificPOAResult" 
                                            value={specificPOAResult}
                                            className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 shadow-sm" 
                                            readOnly 
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-8 flex justify-end">
                                <button 
                                    onClick={resetForm} 
                                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-md shadow-sm transition-colors duration-300 mr-3"
                                >
                                    Reset
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 bg-white rounded-lg shadow p-6">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">How to Use This Calculator</h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Enter either the LMP (Last Menstrual Period) or EDD (Estimated Due Date) - entering one will automatically calculate the other.</li>
                            <li>The calculator will automatically show the current POA (Period of Amenorrhea) in weeks and days.</li>
                            <li>To find a specific date corresponding to a certain POA, enter the week and days in the format "week days" (e.g., "20 3" for 20 weeks and 3 days).</li>
                            <li>The 28 Weeks Date is automatically calculated, which is an important milestone in pregnancy.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}