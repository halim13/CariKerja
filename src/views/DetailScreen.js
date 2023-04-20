import React from 'react'
import {
  Linking,
  ScrollView,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native'
import {Appbar, Button, Card, Text} from 'react-native-paper'
import RenderHtml from 'react-native-render-html'
import ImageCompany from '../components/ImageCompany'

const TextInfo = ({label, description, html}) => {
  const {width} = useWindowDimensions()
  return (
    <View style={{marginBottom: 16}}>
      <Text style={{fontWeight: 'bold', color: '#a1a1a1'}}>{label}</Text>
      {html ? (
        <RenderHtml
          source={{
            html: description,
          }}
          contentWidth={width}
        />
      ) : (
        <Text>{description}</Text>
      )}
    </View>
  )
}

const DetailScreen = ({navigation, route}) => {
  const {item} = route.params

  return (
    <View style={{flex: 1}}>
      <Appbar.Header style={{backgroundColor: '#0000'}}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title='Job Detail' style={{alignItems: 'center'}} />
        <Appbar.Action />
      </Appbar.Header>
      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          padding: 16,
        }}>
        <Text style={{marginBottom: 8, fontWeight: 'bold'}}>Company</Text>
        <Card>
          <View style={{flexDirection: 'row', paddingVertical: 16}}>
            <View>
              <ImageCompany src={item?.company_logo} />
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontWeight: 'bold'}}>{item?.title}</Text>
              <Text style={{color: '#a1a1a1'}}>{item?.company}</Text>
              {/* <Text style={{color: '#a1a1a1'}}>{item?.location}</Text> */}
              <TouchableOpacity
                onPress={() => Linking.openURL(item.company_url)}>
                <Text
                  style={{
                    color: '#1393FF',
                  }}>
                  Go to Website
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card>

        <Text style={{marginVertical: 8, fontWeight: 'bold'}}>
          Job Specification
        </Text>
        <Card>
          <Card.Content>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TextInfo label={'Created At'} description={item?.created_at} />
              <View>
                <Button
                  mode='contained'
                  onPress={() => Linking.openURL(item?.url)}>
                  Apply Now
                </Button>
              </View>
            </View>
            <TextInfo label={'Type'} description={item?.type} />
            <TextInfo label={'Title'} description={item?.title} />
            <TextInfo
              label={'Fulltime'}
              description={!!item?.full_time ? 'Yes' : 'No'}
            />
            <TextInfo
              label={'Description'}
              description={item?.description}
              html
            />
            <TextInfo
              label={'How to Apply'}
              description={item?.how_to_apply}
              html
            />

            <Button mode='contained' onPress={() => Linking.openURL(item?.url)}>
              Apply Now
            </Button>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  )
}

export default DetailScreen
