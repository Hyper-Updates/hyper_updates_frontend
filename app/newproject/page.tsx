"use client"
import { StepProgress } from '@/components/StepProgress'
import React, { useState } from 'react'
import FirstTab from './FirstTab'
import { Button } from '@/components/ui/button'

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

export default function NewPoject() {
    const [currentStep, setCurrentStep] = useState<number>(0)
    const handlePrev = () => {
        {
            currentStep > 0 ?
                setCurrentStep(currentStep - 1) : ""
        }
    }
    const handleNext = () => {
        {
            currentStep < steps.length ?
                setCurrentStep(currentStep + 1) : ""
        }
    }

    return (
        <div className='px-40 py-40'>
            <div className='border shadow rounded flex flex-col'>
                <div className='py-10 border-b mx-40'>
                    <StepProgress currentStep={currentStep} steps={steps} />
                </div>

                <div className='py-10 mx-40 flex flex-col'>
                    <FirstTab />
                    <div className='ml-auto flex gap-5'>
                        <Button onClick={handlePrev} className='w-fit'>Prev</Button>
                        <Button onClick={handleNext} className='w-fit'>Next</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
