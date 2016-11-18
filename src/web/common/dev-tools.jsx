import DockMonitor from 'redux-devtools-dock-monitor'
import LogMonitor from 'redux-devtools-log-monitor'
import React from 'react'
import { createDevTools } from 'redux-devtools'

const DevTools = createDevTools(
  <DockMonitor
       toggleVisibilityKey="ctrl-h"
       changePositionKey="ctrl-q">
    <LogMonitor/>
  </DockMonitor>
)

export default DevTools
