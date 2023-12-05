"use client"
import { StepProgress } from '@/components/StepProgress'
import React, { useState } from 'react'
import FirstTab from './FirstTab'

export default function NewPoject() {
    const [currentStep, setCurrentStep] = useState<number>(2)
    const steps = [
        {
            label: 'Address',
            step: 1,
        },
        {
            label: 'Shipping',
            step: 2,
        },
        {
            label: 'Payment',
            step: 3,
        },
    ]
    return (
        <div className='px-40 py-40'>
            <div className='border shadow rounded flex flex-col'>
                <div className='py-10 border-b mx-40'>
                    <StepProgress currentStep={currentStep} steps={steps} />
                </div>
                <div className='pt-10 mx-40'>
                    <FirstTab/>
                </div>
            </div>
        </div>
    )
}
