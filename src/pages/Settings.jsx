import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Volume2, Mic, Bell, Globe, Moon } from 'lucide-react';
import { setTTSEnabled, setVoiceEnabled } from '../store/slices/chatSlice';

const Settings = () => {
  const dispatch = useDispatch();
  const { isTTSEnabled, isVoiceEnabled } = useSelector(state => state.chat);

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Settings</h1>

      <div className="space-y-6">
        {/* Voice Settings */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-6">Voice Settings</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Volume2 className="w-5 h-5 text-gray-600" />
                <div>
                  <div className="font-medium">Text-to-Speech</div>
                  <div className="text-sm text-gray-600">Enable voice responses from AI</div>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isTTSEnabled}
                  onChange={() => dispatch(setTTSEnabled(!isTTSEnabled))}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mic className="w-5 h-5 text-gray-600" />
                <div>
                  <div className="font-medium">Voice Input</div>
                  <div className="text-sm text-gray-600">Enable voice commands and dictation</div>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isVoiceEnabled}
                  onChange={() => dispatch(setVoiceEnabled(!isVoiceEnabled))}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-6">Notifications</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-gray-600" />
                <div>
                  <div className="font-medium">Push Notifications</div>
                  <div className="text-sm text-gray-600">Get notified about new messages</div>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Appearance Settings */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-6">Appearance</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Moon className="w-5 h-5 text-gray-600" />
                <div>
                  <div className="font-medium">Dark Mode</div>
                  <div className="text-sm text-gray-600">Toggle dark theme</div>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gray-600" />
                <div>
                  <div className="font-medium">Language</div>
                  <div className="text-sm text-gray-600">Choose your preferred language</div>
                </div>
              </div>
              <select className="form-select rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;