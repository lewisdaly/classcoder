#! /usr/bin/python

# this script automates the creation of components
# usage: ./new_component.py componentName outputPath

import sys
import os

if len(sys.argv) < 3:
  print 'usage: new_component.py <ComponentName> <Path>'
  exit(0)

path = sys.argv[2]
componentName = sys.argv[1]

folderPath = path + '/' + componentName
qualifiedFile = folderPath + '/' + componentName + '.js'
package_path = folderPath + '/package.json'

jsStarter = '\n\nrequire(\'./' + componentName + '.css\');\n\n'\
          + 'import React from \'react\';\n'\
          + 'import { Row, Col } from \'react-bootstrap\';\n\n'\
          + 'export default class ' + componentName + ' extends React.Component {\n\n'\
          + '  constructor(props) {\n    super(props);\n  }\n\n'\
          + '  render() {\n    return (\n    );\n  }\n}'

package_starter =  '{\n'\
                    + '"name": "' + componentName + '",\n'\
                    + '"version": "0.0.1",\n'\
                    + '"description": "'+ componentName + ' component",\n'\
                    + '"main": "./' + componentName + '.js"\n'\
                    + '}'

#create the folder
if not os.path.exists(folderPath):
  os.makedirs(folderPath)

#create componentName.js
jsFile = open(qualifiedFile, 'w+')
jsFile.write(jsStarter)

#create package.json
package_file = open(package_path, 'w+')
package_file.write(package_starter)

print 'created new component!'
