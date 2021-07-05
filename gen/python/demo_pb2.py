# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: demo.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='demo.proto',
  package='',
  syntax='proto3',
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\ndemo.proto\"-\n\rDemoContainer\x12\x1c\n\x07objects\x18\x01 \x03(\x0b\x32\x0b.DemoObject\"L\n\nDemoObject\x12\x13\n\x04info\x18\x01 \x01(\x0b\x32\x05.Info\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0c\n\x04type\x18\x03 \x01(\t\x12\r\n\x05\x63ount\x18\x04 \x01(\x05\"\x12\n\x04Info\x12\n\n\x02id\x18\x01 \x01(\t*\"\n\x06MyEnum\x12\x0b\n\x07\x44\x45\x46\x41ULT\x10\x00\x12\x0b\n\x07\x45NABLED\x10\x01\x62\x06proto3'
)

_MYENUM = _descriptor.EnumDescriptor(
  name='MyEnum',
  full_name='MyEnum',
  filename=None,
  file=DESCRIPTOR,
  create_key=_descriptor._internal_create_key,
  values=[
    _descriptor.EnumValueDescriptor(
      name='DEFAULT', index=0, number=0,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='ENABLED', index=1, number=1,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=159,
  serialized_end=193,
)
_sym_db.RegisterEnumDescriptor(_MYENUM)

MyEnum = enum_type_wrapper.EnumTypeWrapper(_MYENUM)
DEFAULT = 0
ENABLED = 1



_DEMOCONTAINER = _descriptor.Descriptor(
  name='DemoContainer',
  full_name='DemoContainer',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='objects', full_name='DemoContainer.objects', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=14,
  serialized_end=59,
)


_DEMOOBJECT = _descriptor.Descriptor(
  name='DemoObject',
  full_name='DemoObject',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='info', full_name='DemoObject.info', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='DemoObject.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='type', full_name='DemoObject.type', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='count', full_name='DemoObject.count', index=3,
      number=4, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=61,
  serialized_end=137,
)


_INFO = _descriptor.Descriptor(
  name='Info',
  full_name='Info',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='Info.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=139,
  serialized_end=157,
)

_DEMOCONTAINER.fields_by_name['objects'].message_type = _DEMOOBJECT
_DEMOOBJECT.fields_by_name['info'].message_type = _INFO
DESCRIPTOR.message_types_by_name['DemoContainer'] = _DEMOCONTAINER
DESCRIPTOR.message_types_by_name['DemoObject'] = _DEMOOBJECT
DESCRIPTOR.message_types_by_name['Info'] = _INFO
DESCRIPTOR.enum_types_by_name['MyEnum'] = _MYENUM
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

DemoContainer = _reflection.GeneratedProtocolMessageType('DemoContainer', (_message.Message,), {
  'DESCRIPTOR' : _DEMOCONTAINER,
  '__module__' : 'demo_pb2'
  # @@protoc_insertion_point(class_scope:DemoContainer)
  })
_sym_db.RegisterMessage(DemoContainer)

DemoObject = _reflection.GeneratedProtocolMessageType('DemoObject', (_message.Message,), {
  'DESCRIPTOR' : _DEMOOBJECT,
  '__module__' : 'demo_pb2'
  # @@protoc_insertion_point(class_scope:DemoObject)
  })
_sym_db.RegisterMessage(DemoObject)

Info = _reflection.GeneratedProtocolMessageType('Info', (_message.Message,), {
  'DESCRIPTOR' : _INFO,
  '__module__' : 'demo_pb2'
  # @@protoc_insertion_point(class_scope:Info)
  })
_sym_db.RegisterMessage(Info)


# @@protoc_insertion_point(module_scope)