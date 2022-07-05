import {
    FormLabel, Input, InputRightElement,
    InputGroup, Button, IconButton,
    FormControl, FormErrorMessage,
    Slider, SliderTrack, Box,
    SliderFilledTrack, SliderThumb,
    SliderMark, Grid, GridItem
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useField } from 'formik'
import React, { useState } from 'react'

export const InputField = ({ label, type, placeholder, ...props }) => {
    const [field, meta] = useField(props)
    const [show, setShow] = useState(false)

    return (
        <FormControl {...props} isInvalid={!!meta.error}>
            {label && <FormLabel htmlFor={field.name}>{label}</FormLabel>}
            <InputGroup>
                <Input
                    {...field}
                    variant="primary"
                    id={field.name}
                    type={type === "password" && show ? "text" : type}
                    placeholder={placeholder}
                    autoComplete="off"
                />
                {type === "password" && field.value && <InputRightElement width="3.5em">
                    <IconButton
                        icon={show ? <ViewOffIcon /> : <ViewIcon />}
                        h="1.75em"
                        border="none"
                        variant="textButton"
                        color="accent.500"
                        onClick={() => setShow(!show)}
                    />
                </InputRightElement>}
            </InputGroup>
            {meta.error && <FormErrorMessage>{meta.error}</FormErrorMessage>}
        </FormControl>
    )
}

export const CheckField = ({ label, options, ...props }) => {
    const [field] = useField(props)
    return (
        <>
            <label>
                {label}
                <input {...field} {...props} type="checkbox" autoComplete="off" />
            </label>
        </>
    )
}

export const RateField = ({ label, options, ...props }) => {
    const [field] = useField(props)
    return (
        <>
            <label>
                {label}
                <select {...field} {...props} autoComplete="off">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
        </>
    )
}



export const SliderField = React.memo(function SliderField(props) {
    const [sliderValue, setSliderValue] = useState(0)
    const [field, helpers] = useField(props)
    return (
        <Grid w={300} templateColumns='1fr 1fr'>
            {props.label && <GridItem w='100%'>{props.label}</GridItem>}
            <GridItem w='100%'>
                <Slider
                    {...field}
                    min={0}
                    max={5}
                    step={1}
                    value={sliderValue}
                    onChange={(val) => {
                        setSliderValue(val)
                        helpers.setValue(val)
                    }}
                    aria-label='slider-ex-6'
                    focusThumbOnChange={false}
                >
                    <SliderTrack bg='red.100'>
                        <Box position='relative' right={10} />
                        <SliderFilledTrack bg='tomato' />
                    </SliderTrack>
                    <SliderMark
                        value={5}
                        textAlign='center'
                        mt='-3'
                        color='white'
                        bg='blue.500'
                        ml='5'
                        w='12'
                    >{sliderValue}</SliderMark>
                    <SliderThumb boxSize={4} bg='tomato'>

                    </SliderThumb>
                </Slider>
            </GridItem>
        </Grid>
    )
})