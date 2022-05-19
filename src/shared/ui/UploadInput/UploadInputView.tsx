import { library } from '@fortawesome/fontawesome-svg-core';
import { faImage, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import toast from 'react-hot-toast';
import { ActionButton, Image, ImageWrapper, Label } from './UploadInputStyle';

library.add(faImage, faTimes);

interface Props {
  value?: string;
  onChange(value: string);
  endpointFunction({ file: Blob, recaptcha: string }): Promise<{ url: string }>;
}

const UploadInput: React.FC<Props> = ({
  endpointFunction,
  value,
  onChange,
}) => {
  const [selectedFile, setSelectedFile] = useState();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = async () => {
    if (!executeRecaptcha) {
      toast.error('Wystąpił błąd');
      return;
    }

    const recaptcha = await executeRecaptcha(`uploadimage`).catch(() => {
      toast.error('Wystąpił błąd.');
    });

    endpointFunction({ file: selectedFile, recaptcha })
      .then(({ url }) => onChange(url))
      .catch((e) => {
        console.error(e);
        toast.error('Wystąpił błąd');
      });
  };

  useEffect(() => {
    if (selectedFile) {
      handleSubmission();
    }
  }, [selectedFile]);

  if (value) {
    return (
      <ImageWrapper as="div" onClick={(e) => e.preventDefault()}>
        <Image src={value} alt={value} width={180} height={90} />
        <ActionButton danger onClick={() => onChange('')}>
          <FontAwesomeIcon icon={faTimes} />
        </ActionButton>
      </ImageWrapper>
    );
  }

  return (
    <Label>
      <input type="file" name="file" onChange={changeHandler} />
      <FontAwesomeIcon icon={faImage} />
      <span>Kliknij tutaj, aby przesłać plik</span>
    </Label>
  );
};

export default UploadInput;
