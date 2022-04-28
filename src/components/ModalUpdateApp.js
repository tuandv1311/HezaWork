/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Platform, View, StyleSheet, Text} from 'react-native';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import {ProgressView} from '@react-native-community/progress-view';
import Modal from 'react-native-modal';
import CodePush from 'react-native-code-push';
import SplashScreen from 'react-native-splash-screen';
// import {useDispatch} from 'react-redux';
// import {updateCodePushVersionAction} from '../../redux/action/setting';
import {CustomFonts} from '../constants/AppConstants';

const ModalUpdateApp = () => {
  //   const dispatch = useDispatch();
  const [updating, setUpdate] = useState(false);
  const [syncMessage, setSyncMessage] = useState('');
  const [showModalUpdate, setShowModalUpdate] = useState(false);

  useEffect(() => {
    syncImmediate();
    getAppVersion();
  }, []);

  const getAppVersion = async () => {
    const [{appVersion}, update] = await Promise.all([
      CodePush.getConfiguration(),
      CodePush.getUpdateMetadata(),
    ]);

    console.log('appVersion', appVersion);
    if (!update) {
      //   dispatch(updateCodePushVersionAction({appVersion}));
      return;
    }

    // const label = update?.label.substring(1);
    // dispatch(updateCodePushVersionAction({appVersion, codePushVersion: label}));
    return;
  };

  const syncImmediate = () => {
    CodePush.sync(
      {installMode: CodePush.InstallMode.IMMEDIATE, updateDialog: false},
      syncStatus => {
        codePushStatusDidChange(syncStatus);
      },
      progress => {
        codePushDownloadDidProgress(progress);
      },
    );
  };

  const codePushDownloadDidProgress = progress => {
    setUpdate(progress);
  };

  const codePushStatusDidChange = syncStatus => {
    switch (syncStatus) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
        setSyncMessage('Checking for update.');
        break;
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        setShowModalUpdate(true);
        setSyncMessage('Downloading package.');
        break;
      case CodePush.SyncStatus.AWAITING_USER_ACTION:
        setSyncMessage('Awaiting user action.');
        break;
      case CodePush.SyncStatus.INSTALLING_UPDATE:
        setSyncMessage('Installing update.');
        break;
      case CodePush.SyncStatus.UP_TO_DATE:
        setSyncMessage('App up to date.');
        setUpdate(false);
        setShowModalUpdate(false);
        break;
      case CodePush.SyncStatus.UPDATE_IGNORED:
        setSyncMessage('Update cancelled by user.');
        setUpdate(false);
        setShowModalUpdate(false);
        break;
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        SplashScreen.show();
        setSyncMessage('Update installed and will be applied on restart.');
        setUpdate(false);
        setShowModalUpdate(false);
        break;
      case CodePush.SyncStatus.UNKNOWN_ERROR:
        setSyncMessage('An unknown error occurred.');
        setUpdate(false);
        break;
    }
  };

  let updatingView;
  if (updating) {
    updatingView = (
      <View>
        <View style={{flexDirection: 'row', marginBottom: 12}}>
          <Text style={{fontFamily: CustomFonts.medium, fontSize: 18}}>
            {'Downloading'}
          </Text>
          <Text
            style={{
              fontFamily: CustomFonts.semibold,
              fontSize: 18,
              marginLeft: 20,
              maxWidth: 60,
            }}>
            {((updating.receivedBytes / updating.totalBytes) * 100).toFixed(0)}%
          </Text>
        </View>
        <View style={styles.wrapperProgress}>
          {Platform.OS === 'android' ? (
            <ProgressBar
              styleAttr="Horizontal"
              progress={updating.receivedBytes / updating.totalBytes}
              indeterminate={false}
              style={styles.progressBar}
              color={'#00B9E7'}
              collapsable={true}
            />
          ) : (
            <ProgressView
              progress={updating.receivedBytes / updating.totalBytes}
              style={styles.progressBar}
              progressTintColor={'#00B9E7'}
            />
          )}
        </View>
        <Text
          color={'#ED6868'}
          style={{fontFamily: CustomFonts.regular, fontSize: 11, marginTop: 5}}>
          * {'Please do not turn off the app when updating'}
        </Text>
      </View>
    );
  }
  if (!showModalUpdate) {
    return null;
  }

  return (
    <Modal
      hideModalContentWhileAnimating
      backdropTransitionOutTiming={0}
      useNativeDriver={true}
      isVisible={true}
      // onBackdropPress={() => setShowModalUpdate(false)}
      // onBackButtonPress={() => setShowModalUpdate(false)}
    >
      <View style={styles.loading}>
        <View style={styles.header}>
          <Text b18 style={styles.textHeader}>
            {'Update'}
          </Text>
        </View>
        <View style={styles.viewLoading}>
          {updatingView ? (
            updatingView
          ) : (
            <Text
              style={{
                fontFamily: CustomFonts.semibold,
                fontSize: 18,
                textAlign: 'center',
              }}>
              {syncMessage}
            </Text>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrapperProgress: {
    elevation: 2,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBar: {
    width: 260,
    alignSelf: 'center',
    height: 20,
    transform: [{scaleX: 1.0}, {scaleY: 6}],
  },
  loading: {
    width: 300,
    height: 180,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 4,
    overflow: 'hidden',
  },
  header: {
    width: '100%',
    height: 50,
    backgroundColor: '#ea5f71',
    justifyContent: 'center',
  },
  textHeader: {
    fontFamily: CustomFonts.semibold,
    fontSize: 18,
    color: '#FFFFFF',
    marginLeft: 16,
  },
  viewLoading: {
    flex: 1,
    justifyContent: 'center',
    alignIte: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
});

export default ModalUpdateApp;
