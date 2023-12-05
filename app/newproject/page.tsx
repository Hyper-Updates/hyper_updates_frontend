"use client"
import { StepProgress } from '@/components/StepProgress'
import React, { useState } from 'react'

export default function page() {
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
        {
          label: 'Summary',
          step: 4,
        },
      ]
    return (
        <div className='px-40'>
            <div className='my-40 px-40 '>
                <StepProgress currentStep={currentStep} steps={steps} />
            </div>
        </div>
    )
}
