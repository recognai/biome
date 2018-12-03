# coding: utf-8

"""
    RecognAI API

    Recognai Platform API specification  # noqa: E501

    OpenAPI spec version: v0.1.0
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class ModelDefinitionTopology(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'pipeline': 'dict(str, object)',
        'architecture': 'dict(str, object)'
    }

    attribute_map = {
        'pipeline': 'pipeline',
        'architecture': 'architecture'
    }

    def __init__(self, pipeline=None, architecture=None):  # noqa: E501
        """ModelDefinitionTopology - a model defined in Swagger"""  # noqa: E501

        self._pipeline = None
        self._architecture = None
        self.discriminator = None

        self.pipeline = pipeline
        self.architecture = architecture

    @property
    def pipeline(self):
        """Gets the pipeline of this ModelDefinitionTopology.  # noqa: E501


        :return: The pipeline of this ModelDefinitionTopology.  # noqa: E501
        :rtype: dict(str, object)
        """
        return self._pipeline

    @pipeline.setter
    def pipeline(self, pipeline):
        """Sets the pipeline of this ModelDefinitionTopology.


        :param pipeline: The pipeline of this ModelDefinitionTopology.  # noqa: E501
        :type: dict(str, object)
        """
        if pipeline is None:
            raise ValueError("Invalid value for `pipeline`, must not be `None`")  # noqa: E501

        self._pipeline = pipeline

    @property
    def architecture(self):
        """Gets the architecture of this ModelDefinitionTopology.  # noqa: E501


        :return: The architecture of this ModelDefinitionTopology.  # noqa: E501
        :rtype: dict(str, object)
        """
        return self._architecture

    @architecture.setter
    def architecture(self, architecture):
        """Sets the architecture of this ModelDefinitionTopology.


        :param architecture: The architecture of this ModelDefinitionTopology.  # noqa: E501
        :type: dict(str, object)
        """
        if architecture is None:
            raise ValueError("Invalid value for `architecture`, must not be `None`")  # noqa: E501

        self._architecture = architecture

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(ModelDefinitionTopology, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, ModelDefinitionTopology):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
