import { Image } from 'react-native'
import React, { useState } from 'react'

const ImageCompany = ({ src }) => {
    const defaultImage = '../assets/image/common/404.jpg'

    const [img, setImg] = useState(
      require(defaultImage),
    )

    return (
      <Image
        source={img}
        style={{
          width: 80,
          height: 80,
          resizeMode: 'contain',
          backgroundColor: '#F8F8F8',
          marginRight: 4,
        }}
        onError={() => setImg(defaultImage)}
        defaultSource={require(defaultImage)}
      />
    )
  }

export default ImageCompany