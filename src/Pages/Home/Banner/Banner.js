import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        imgPath:
            'https://th.bing.com/th/id/R.76febecd08b10c58c99298320cbbea98?rik=MFmRRaRnGmy4Wg&riu=http%3a%2f%2faimisclinics.com%2fwp-content%2fuploads%2f2017%2f12%2fAlternative-Medicine.jpg&ehk=iAOEadTSeLasS8dI%2fAINHSjO8sYVTW7JIq0oHxgLKfA%3d&risl=&pid=ImgRaw&r=0',
    },
    {
        imgPath:
            'https://foxintegratedhealthcare.com/wp-content/uploads/2020/01/Fox-Integrated-Health-Chiropractic-Services-Regenerative-Medicine.jpg',
    },
    {
        imgPath:
            'https://ysm-res.cloudinary.com/image/upload/v1/yale-medicine/live-prod/ym_new/images/be719e60-f117-47f9-9310-4f8c5959be06_tcm990-376111.jpg',
    },
    {
        imgPath:
            'https://th.bing.com/th/id/R.04e377e1365a6916995befa9b974a9c5?rik=5GkvOjsv2Q%2fu5A&pid=ImgRaw&r=0',
    },
];
const Banner = () => {


    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ maxWidth: "80%", flexGrow: 1, mx: "auto" }}>

            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: "80vh",
                                    display: 'block',
                                    maxWidth: "100%",
                                    overflow: 'hidden',
                                    width: '100%',
                                    mx: "auto"
                                }}
                                src={step.imgPath}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </Box>
    );
};

export default Banner;