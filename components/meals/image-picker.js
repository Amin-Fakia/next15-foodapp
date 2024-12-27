'use client';
import { useRef, useState} from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';
export default function ImagePicker({label, name}) {
    const [image, setImage] = useState();
    const imageInput = useRef();
    function handlePickImage() {
        imageInput.current.click();
    }
    function hanldeImageChange (event) {
        const file = event.target.files[0];
        if (!file) {
            setImage(null);
            return;
        }
        const reader = new FileReader();
        
        reader.onload = function() {
            setImage(reader.result);
        }
        reader.readAsDataURL(file);
    }

    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!image && <p>No image picked yet.</p>}
                {image && <Image src={image} alt='The image selected by the user.' fill />}

            </div>
            <input 
            className={classes.input}
            type='file' id={name} accept='.jpg,.jpeg,.png' name={name} ref={imageInput} onChange={hanldeImageChange} required/>
            <button className={classes.button} type='button' onClick={handlePickImage}>Pick an Image</button>
            

        </div>
    </div>


}