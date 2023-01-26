import os
import shutil
from glob import glob

license_id = '{{ cookiecutter.license_id }}'
use_docker = '{{ cookiecutter.use_docker }}'

if license_id != 'None':
    os.rename('LICENSE.{{ cookiecutter.license_id }}', 'LICENSE')

for license_file in glob('LICENSE.*'):
    os.unlink(license_file)

if use_docker == 'no':
    shutil.rmtree('docker')
    os.unlink('Dockerfile')
    os.unlink('docker-compose.yml')
    os.unlink('.dockerignore')
