package com.quanlyphongtro;

import android.content.res.Resources;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.IllegalViewOperationException;

public class HelloWorldModule extends ReactContextBaseJavaModule {

    public HelloWorldModule(ReactApplicationContext reactContext) {
        super(reactContext); //required by React Native
    }

    @Override
    //getName is required to define the name of the module represented in JavaScript
    public String getName() {
        return "HelloWorld";
    }

    int width = Resources.getSystem().getDisplayMetrics().widthPixels;
    int height = Resources.getSystem().getDisplayMetrics().heightPixels;
    @ReactMethod
    public void getWidth() {
        System.out.println("getWidth from Java");
        System.out.println(width);
//        return Resources.getSystem().getDisplayMetrics().widthPixels;
    }
    @ReactMethod
    public int getHeight() {
        return height;
    }
    @ReactMethod
    public void sayHi(Callback errorCallback, Callback successCallback) {
        try {
            System.out.println("Greetings from Java");
            successCallback.invoke(width);
        } catch (IllegalViewOperationException e) {
            errorCallback.invoke(e.getMessage());
        }
    }


}
