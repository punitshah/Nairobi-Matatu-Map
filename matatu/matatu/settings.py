"""
Django settings for geekLookUp project.

For more information on this file, see
https://docs.djangoproject.com/en/1.6/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.6/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
BASE_DIR = os.path.dirname(os.path.dirname(__file__))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.6/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '5wbyiu#vep-^0m(aan83jzdts4v0%ge%ir@p%+6816xgm=a03a'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

TEMPLATE_DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'matatuMap',
    'pipeline',
    'twitter_bootstrap',
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'pipeline.middleware.MinifyHTMLMiddleware',
)

ROOT_URLCONF = 'matatu.urls'

WSGI_APPLICATION = 'matatu.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.6/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

# Cache information and settings

CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.memcached.MemcachedCache',
        'LOCATION': '127.0.0.1:11211',
    }
}

# Internationalization
# https://docs.djangoproject.com/en/1.6/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.6/howto/static-files/

STATIC_URL = '/static/'

STATIC_ROOT = 'static.mydomain.com'

STATICFILES_STORAGE = 'pipeline.storage.PipelineCachedStorage'


PIPELINE_COMPILERS = (
  'pipeline.compilers.less.LessCompiler',
)

PIPELINE_CSS = {
    'style': {
        'source_filenames': (
          'twitter_bootstrap/less/variables.less',
          'twitter_bootstrap/less/bootstrap.less',
          'matatuMap/css/style.less'
        ),
        'output_filename': 'css/style.css',
        'extra_context': {
            'media': 'screen,projection',
        },
    },
}

PIPELINE_JS = {
    'angular': {
        'source_filenames': (
          'matatuMap/js/angular.min.js',
          'matatuMap/js/angular.min.js.map',),
        'output_filename': 'js/an.js',
        'extra_context': {
            'async': False,
        },
    },

    'misc': {
        'source_filenames': (
          'matatuMap/js/apiKey.js',
          'matatuMap/js/controls.js',
          'matatuMap/js/docs.min.js',
          'matatuMap/js/ie10-viewport-bug-workaround.js',
          'matatuMap/js/map.js'),
        'output_filename': 'js/ms.js',
        'extra_context': {
            'async': False,
        },
    },

    'jquery': {
        'source_filenames': (
          'matatuMap/js/jquery-1.11.1.js',),
        'output_filename': 'js/jq.js',
        'extra_context': {
            'async': False,
        },
    },
  #TODO: Determine which bootstrap js files we actually use...
    'bootstrap': {
        'source_filenames': (
          'twitter_bootstrap/js/transition.js',
          'twitter_bootstrap/js/modal.js',
          'twitter_bootstrap/js/dropdown.js',
          'twitter_bootstrap/js/scrollspy.js',
          'twitter_bootstrap/js/tab.js',
          'twitter_bootstrap/js/tooltip.js',
          'twitter_bootstrap/js/popover.js',
          'twitter_bootstrap/js/alert.js',
          'twitter_bootstrap/js/button.js',
          'twitter_bootstrap/js/collapse.js',
          'twitter_bootstrap/js/carousel.js',
          'twitter_bootstrap/js/affix.js',
        ),
        'output_filename': 'js/bs.js',
        'extra_context': {
            'async': False,
        },
    },
}
