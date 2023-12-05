"use client"
import { StepProgress } from '@/components/StepProgress'
import React, { useState } from 'react'
import { FirstTab } from './FirstTab'
import { Button } from '@/components/ui/button'
import { SecondTab } from './SecondTab'
import { ThirdTab } from './ThirdTab'

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
    const [currentStep, setCurrentStep] = useState<number>(1)
    const handlePrev = () => {
        {
            currentStep > 1 ?
                setCurrentStep(currentStep - 1) : ""
        }
    }
    const handleNext = () => {
        {
            currentStep < steps.length ?
                setCurrentStep(currentStep + 1) : ""
        }
    }

    const updateCurrentStep = (newStep: number) => {
        setCurrentStep(newStep);
    };

    return (
        <div className='px-40 py-40'>
            <div className='border shadow rounded flex flex-col'>
                <div className='py-10 border-b mx-40'>
                    <StepProgress currentStep={currentStep} steps={steps} />
                </div>

                <div className='py-10 mx-40 flex flex-col'>
                    {
                        (() => {
                            switch (currentStep) {
                                case 1:
                                    return <FirstTab currentStep={currentStep} updateCurrentStep={updateCurrentStep} />;
                                case 2:
                                    return <SecondTab currentStep={currentStep} updateCurrentStep={updateCurrentStep} />;
                                case 3:
                                    return <ThirdTab currentStep={currentStep} updateCurrentStep={updateCurrentStep} />;
                                default:
                                    return <FirstTab currentStep={currentStep} updateCurrentStep={updateCurrentStep} />;
                            }
                        })()
                    }
                    {/* <div className='ml-auto flex gap-5 pt-5'>
                        <Button onClick={handlePrev} variant={'outline'} className='w-fit'>Prev</Button>
                        {currentStep < steps.length ?
                            <Button onClick={handleNext} className='w-fit'>Next</Button> :
                            <Button onClick={handleNext} className='w-fit'>Submit</Button>
                        }
                    </div> */}
                </div>
            </div>
        </div>
    )
}
