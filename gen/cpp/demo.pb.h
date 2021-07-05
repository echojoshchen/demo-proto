// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: demo.proto

#ifndef GOOGLE_PROTOBUF_INCLUDED_demo_2eproto
#define GOOGLE_PROTOBUF_INCLUDED_demo_2eproto

#include <limits>
#include <string>

#include <google/protobuf/port_def.inc>
#if PROTOBUF_VERSION < 3015000
#error This file was generated by a newer version of protoc which is
#error incompatible with your Protocol Buffer headers. Please update
#error your headers.
#endif
#if 3015007 < PROTOBUF_MIN_PROTOC_VERSION
#error This file was generated by an older version of protoc which is
#error incompatible with your Protocol Buffer headers. Please
#error regenerate this file with a newer version of protoc.
#endif

#include <google/protobuf/port_undef.inc>
#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/arena.h>
#include <google/protobuf/arenastring.h>
#include <google/protobuf/generated_message_table_driven.h>
#include <google/protobuf/generated_message_util.h>
#include <google/protobuf/metadata_lite.h>
#include <google/protobuf/generated_message_reflection.h>
#include <google/protobuf/message.h>
#include <google/protobuf/repeated_field.h>  // IWYU pragma: export
#include <google/protobuf/extension_set.h>  // IWYU pragma: export
#include <google/protobuf/generated_enum_reflection.h>
#include <google/protobuf/unknown_field_set.h>
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
#define PROTOBUF_INTERNAL_EXPORT_demo_2eproto
PROTOBUF_NAMESPACE_OPEN
namespace internal {
class AnyMetadata;
}  // namespace internal
PROTOBUF_NAMESPACE_CLOSE

// Internal implementation detail -- do not use these members.
struct TableStruct_demo_2eproto {
  static const ::PROTOBUF_NAMESPACE_ID::internal::ParseTableField entries[]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::AuxiliaryParseTableField aux[]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::ParseTable schema[3]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::FieldMetadata field_metadata[];
  static const ::PROTOBUF_NAMESPACE_ID::internal::SerializationTable serialization_table[];
  static const ::PROTOBUF_NAMESPACE_ID::uint32 offsets[];
};
extern const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_demo_2eproto;
::PROTOBUF_NAMESPACE_ID::Metadata descriptor_table_demo_2eproto_metadata_getter(int index);
class DemoContainer;
struct DemoContainerDefaultTypeInternal;
extern DemoContainerDefaultTypeInternal _DemoContainer_default_instance_;
class DemoObject;
struct DemoObjectDefaultTypeInternal;
extern DemoObjectDefaultTypeInternal _DemoObject_default_instance_;
class Info;
struct InfoDefaultTypeInternal;
extern InfoDefaultTypeInternal _Info_default_instance_;
PROTOBUF_NAMESPACE_OPEN
template<> ::DemoContainer* Arena::CreateMaybeMessage<::DemoContainer>(Arena*);
template<> ::DemoObject* Arena::CreateMaybeMessage<::DemoObject>(Arena*);
template<> ::Info* Arena::CreateMaybeMessage<::Info>(Arena*);
PROTOBUF_NAMESPACE_CLOSE

enum MyEnum : int {
  DEFAULT = 0,
  ENABLED = 1,
  MyEnum_INT_MIN_SENTINEL_DO_NOT_USE_ = std::numeric_limits<::PROTOBUF_NAMESPACE_ID::int32>::min(),
  MyEnum_INT_MAX_SENTINEL_DO_NOT_USE_ = std::numeric_limits<::PROTOBUF_NAMESPACE_ID::int32>::max()
};
bool MyEnum_IsValid(int value);
constexpr MyEnum MyEnum_MIN = DEFAULT;
constexpr MyEnum MyEnum_MAX = ENABLED;
constexpr int MyEnum_ARRAYSIZE = MyEnum_MAX + 1;

const ::PROTOBUF_NAMESPACE_ID::EnumDescriptor* MyEnum_descriptor();
template<typename T>
inline const std::string& MyEnum_Name(T enum_t_value) {
  static_assert(::std::is_same<T, MyEnum>::value ||
    ::std::is_integral<T>::value,
    "Incorrect type passed to function MyEnum_Name.");
  return ::PROTOBUF_NAMESPACE_ID::internal::NameOfEnum(
    MyEnum_descriptor(), enum_t_value);
}
inline bool MyEnum_Parse(
    ::PROTOBUF_NAMESPACE_ID::ConstStringParam name, MyEnum* value) {
  return ::PROTOBUF_NAMESPACE_ID::internal::ParseNamedEnum<MyEnum>(
    MyEnum_descriptor(), name, value);
}
// ===================================================================

class DemoContainer PROTOBUF_FINAL :
    public ::PROTOBUF_NAMESPACE_ID::Message /* @@protoc_insertion_point(class_definition:DemoContainer) */ {
 public:
  inline DemoContainer() : DemoContainer(nullptr) {}
  virtual ~DemoContainer();
  explicit constexpr DemoContainer(::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized);

  DemoContainer(const DemoContainer& from);
  DemoContainer(DemoContainer&& from) noexcept
    : DemoContainer() {
    *this = ::std::move(from);
  }

  inline DemoContainer& operator=(const DemoContainer& from) {
    CopyFrom(from);
    return *this;
  }
  inline DemoContainer& operator=(DemoContainer&& from) noexcept {
    if (GetArena() == from.GetArena()) {
      if (this != &from) InternalSwap(&from);
    } else {
      CopyFrom(from);
    }
    return *this;
  }

  static const ::PROTOBUF_NAMESPACE_ID::Descriptor* descriptor() {
    return GetDescriptor();
  }
  static const ::PROTOBUF_NAMESPACE_ID::Descriptor* GetDescriptor() {
    return GetMetadataStatic().descriptor;
  }
  static const ::PROTOBUF_NAMESPACE_ID::Reflection* GetReflection() {
    return GetMetadataStatic().reflection;
  }
  static const DemoContainer& default_instance() {
    return *internal_default_instance();
  }
  static inline const DemoContainer* internal_default_instance() {
    return reinterpret_cast<const DemoContainer*>(
               &_DemoContainer_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  friend void swap(DemoContainer& a, DemoContainer& b) {
    a.Swap(&b);
  }
  inline void Swap(DemoContainer* other) {
    if (other == this) return;
    if (GetArena() == other->GetArena()) {
      InternalSwap(other);
    } else {
      ::PROTOBUF_NAMESPACE_ID::internal::GenericSwap(this, other);
    }
  }
  void UnsafeArenaSwap(DemoContainer* other) {
    if (other == this) return;
    GOOGLE_DCHECK(GetArena() == other->GetArena());
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  inline DemoContainer* New() const final {
    return CreateMaybeMessage<DemoContainer>(nullptr);
  }

  DemoContainer* New(::PROTOBUF_NAMESPACE_ID::Arena* arena) const final {
    return CreateMaybeMessage<DemoContainer>(arena);
  }
  void CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void CopyFrom(const DemoContainer& from);
  void MergeFrom(const DemoContainer& from);
  PROTOBUF_ATTRIBUTE_REINITIALIZES void Clear() final;
  bool IsInitialized() const final;

  size_t ByteSizeLong() const final;
  const char* _InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) final;
  ::PROTOBUF_NAMESPACE_ID::uint8* _InternalSerialize(
      ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const final;
  int GetCachedSize() const final { return _cached_size_.Get(); }

  private:
  inline void SharedCtor();
  inline void SharedDtor();
  void SetCachedSize(int size) const final;
  void InternalSwap(DemoContainer* other);
  friend class ::PROTOBUF_NAMESPACE_ID::internal::AnyMetadata;
  static ::PROTOBUF_NAMESPACE_ID::StringPiece FullMessageName() {
    return "DemoContainer";
  }
  protected:
  explicit DemoContainer(::PROTOBUF_NAMESPACE_ID::Arena* arena);
  private:
  static void ArenaDtor(void* object);
  inline void RegisterArenaDtor(::PROTOBUF_NAMESPACE_ID::Arena* arena);
  public:

  ::PROTOBUF_NAMESPACE_ID::Metadata GetMetadata() const final;
  private:
  static ::PROTOBUF_NAMESPACE_ID::Metadata GetMetadataStatic() {
    return ::descriptor_table_demo_2eproto_metadata_getter(kIndexInFileMessages);
  }

  public:

  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------

  enum : int {
    kObjectsFieldNumber = 1,
  };
  // repeated .DemoObject objects = 1;
  int objects_size() const;
  private:
  int _internal_objects_size() const;
  public:
  void clear_objects();
  ::DemoObject* mutable_objects(int index);
  ::PROTOBUF_NAMESPACE_ID::RepeatedPtrField< ::DemoObject >*
      mutable_objects();
  private:
  const ::DemoObject& _internal_objects(int index) const;
  ::DemoObject* _internal_add_objects();
  public:
  const ::DemoObject& objects(int index) const;
  ::DemoObject* add_objects();
  const ::PROTOBUF_NAMESPACE_ID::RepeatedPtrField< ::DemoObject >&
      objects() const;

  // @@protoc_insertion_point(class_scope:DemoContainer)
 private:
  class _Internal;

  template <typename T> friend class ::PROTOBUF_NAMESPACE_ID::Arena::InternalHelper;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  ::PROTOBUF_NAMESPACE_ID::RepeatedPtrField< ::DemoObject > objects_;
  mutable ::PROTOBUF_NAMESPACE_ID::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_demo_2eproto;
};
// -------------------------------------------------------------------

class DemoObject PROTOBUF_FINAL :
    public ::PROTOBUF_NAMESPACE_ID::Message /* @@protoc_insertion_point(class_definition:DemoObject) */ {
 public:
  inline DemoObject() : DemoObject(nullptr) {}
  virtual ~DemoObject();
  explicit constexpr DemoObject(::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized);

  DemoObject(const DemoObject& from);
  DemoObject(DemoObject&& from) noexcept
    : DemoObject() {
    *this = ::std::move(from);
  }

  inline DemoObject& operator=(const DemoObject& from) {
    CopyFrom(from);
    return *this;
  }
  inline DemoObject& operator=(DemoObject&& from) noexcept {
    if (GetArena() == from.GetArena()) {
      if (this != &from) InternalSwap(&from);
    } else {
      CopyFrom(from);
    }
    return *this;
  }

  static const ::PROTOBUF_NAMESPACE_ID::Descriptor* descriptor() {
    return GetDescriptor();
  }
  static const ::PROTOBUF_NAMESPACE_ID::Descriptor* GetDescriptor() {
    return GetMetadataStatic().descriptor;
  }
  static const ::PROTOBUF_NAMESPACE_ID::Reflection* GetReflection() {
    return GetMetadataStatic().reflection;
  }
  static const DemoObject& default_instance() {
    return *internal_default_instance();
  }
  static inline const DemoObject* internal_default_instance() {
    return reinterpret_cast<const DemoObject*>(
               &_DemoObject_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    1;

  friend void swap(DemoObject& a, DemoObject& b) {
    a.Swap(&b);
  }
  inline void Swap(DemoObject* other) {
    if (other == this) return;
    if (GetArena() == other->GetArena()) {
      InternalSwap(other);
    } else {
      ::PROTOBUF_NAMESPACE_ID::internal::GenericSwap(this, other);
    }
  }
  void UnsafeArenaSwap(DemoObject* other) {
    if (other == this) return;
    GOOGLE_DCHECK(GetArena() == other->GetArena());
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  inline DemoObject* New() const final {
    return CreateMaybeMessage<DemoObject>(nullptr);
  }

  DemoObject* New(::PROTOBUF_NAMESPACE_ID::Arena* arena) const final {
    return CreateMaybeMessage<DemoObject>(arena);
  }
  void CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void CopyFrom(const DemoObject& from);
  void MergeFrom(const DemoObject& from);
  PROTOBUF_ATTRIBUTE_REINITIALIZES void Clear() final;
  bool IsInitialized() const final;

  size_t ByteSizeLong() const final;
  const char* _InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) final;
  ::PROTOBUF_NAMESPACE_ID::uint8* _InternalSerialize(
      ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const final;
  int GetCachedSize() const final { return _cached_size_.Get(); }

  private:
  inline void SharedCtor();
  inline void SharedDtor();
  void SetCachedSize(int size) const final;
  void InternalSwap(DemoObject* other);
  friend class ::PROTOBUF_NAMESPACE_ID::internal::AnyMetadata;
  static ::PROTOBUF_NAMESPACE_ID::StringPiece FullMessageName() {
    return "DemoObject";
  }
  protected:
  explicit DemoObject(::PROTOBUF_NAMESPACE_ID::Arena* arena);
  private:
  static void ArenaDtor(void* object);
  inline void RegisterArenaDtor(::PROTOBUF_NAMESPACE_ID::Arena* arena);
  public:

  ::PROTOBUF_NAMESPACE_ID::Metadata GetMetadata() const final;
  private:
  static ::PROTOBUF_NAMESPACE_ID::Metadata GetMetadataStatic() {
    return ::descriptor_table_demo_2eproto_metadata_getter(kIndexInFileMessages);
  }

  public:

  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------

  enum : int {
    kNameFieldNumber = 2,
    kTypeFieldNumber = 3,
    kInfoFieldNumber = 1,
    kCountFieldNumber = 4,
  };
  // string name = 2;
  void clear_name();
  const std::string& name() const;
  void set_name(const std::string& value);
  void set_name(std::string&& value);
  void set_name(const char* value);
  void set_name(const char* value, size_t size);
  std::string* mutable_name();
  std::string* release_name();
  void set_allocated_name(std::string* name);
  private:
  const std::string& _internal_name() const;
  void _internal_set_name(const std::string& value);
  std::string* _internal_mutable_name();
  public:

  // string type = 3;
  void clear_type();
  const std::string& type() const;
  void set_type(const std::string& value);
  void set_type(std::string&& value);
  void set_type(const char* value);
  void set_type(const char* value, size_t size);
  std::string* mutable_type();
  std::string* release_type();
  void set_allocated_type(std::string* type);
  private:
  const std::string& _internal_type() const;
  void _internal_set_type(const std::string& value);
  std::string* _internal_mutable_type();
  public:

  // .Info info = 1;
  bool has_info() const;
  private:
  bool _internal_has_info() const;
  public:
  void clear_info();
  const ::Info& info() const;
  ::Info* release_info();
  ::Info* mutable_info();
  void set_allocated_info(::Info* info);
  private:
  const ::Info& _internal_info() const;
  ::Info* _internal_mutable_info();
  public:
  void unsafe_arena_set_allocated_info(
      ::Info* info);
  ::Info* unsafe_arena_release_info();

  // int32 count = 4;
  void clear_count();
  ::PROTOBUF_NAMESPACE_ID::int32 count() const;
  void set_count(::PROTOBUF_NAMESPACE_ID::int32 value);
  private:
  ::PROTOBUF_NAMESPACE_ID::int32 _internal_count() const;
  void _internal_set_count(::PROTOBUF_NAMESPACE_ID::int32 value);
  public:

  // @@protoc_insertion_point(class_scope:DemoObject)
 private:
  class _Internal;

  template <typename T> friend class ::PROTOBUF_NAMESPACE_ID::Arena::InternalHelper;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr name_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr type_;
  ::Info* info_;
  ::PROTOBUF_NAMESPACE_ID::int32 count_;
  mutable ::PROTOBUF_NAMESPACE_ID::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_demo_2eproto;
};
// -------------------------------------------------------------------

class Info PROTOBUF_FINAL :
    public ::PROTOBUF_NAMESPACE_ID::Message /* @@protoc_insertion_point(class_definition:Info) */ {
 public:
  inline Info() : Info(nullptr) {}
  virtual ~Info();
  explicit constexpr Info(::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized);

  Info(const Info& from);
  Info(Info&& from) noexcept
    : Info() {
    *this = ::std::move(from);
  }

  inline Info& operator=(const Info& from) {
    CopyFrom(from);
    return *this;
  }
  inline Info& operator=(Info&& from) noexcept {
    if (GetArena() == from.GetArena()) {
      if (this != &from) InternalSwap(&from);
    } else {
      CopyFrom(from);
    }
    return *this;
  }

  static const ::PROTOBUF_NAMESPACE_ID::Descriptor* descriptor() {
    return GetDescriptor();
  }
  static const ::PROTOBUF_NAMESPACE_ID::Descriptor* GetDescriptor() {
    return GetMetadataStatic().descriptor;
  }
  static const ::PROTOBUF_NAMESPACE_ID::Reflection* GetReflection() {
    return GetMetadataStatic().reflection;
  }
  static const Info& default_instance() {
    return *internal_default_instance();
  }
  static inline const Info* internal_default_instance() {
    return reinterpret_cast<const Info*>(
               &_Info_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    2;

  friend void swap(Info& a, Info& b) {
    a.Swap(&b);
  }
  inline void Swap(Info* other) {
    if (other == this) return;
    if (GetArena() == other->GetArena()) {
      InternalSwap(other);
    } else {
      ::PROTOBUF_NAMESPACE_ID::internal::GenericSwap(this, other);
    }
  }
  void UnsafeArenaSwap(Info* other) {
    if (other == this) return;
    GOOGLE_DCHECK(GetArena() == other->GetArena());
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  inline Info* New() const final {
    return CreateMaybeMessage<Info>(nullptr);
  }

  Info* New(::PROTOBUF_NAMESPACE_ID::Arena* arena) const final {
    return CreateMaybeMessage<Info>(arena);
  }
  void CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void CopyFrom(const Info& from);
  void MergeFrom(const Info& from);
  PROTOBUF_ATTRIBUTE_REINITIALIZES void Clear() final;
  bool IsInitialized() const final;

  size_t ByteSizeLong() const final;
  const char* _InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) final;
  ::PROTOBUF_NAMESPACE_ID::uint8* _InternalSerialize(
      ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const final;
  int GetCachedSize() const final { return _cached_size_.Get(); }

  private:
  inline void SharedCtor();
  inline void SharedDtor();
  void SetCachedSize(int size) const final;
  void InternalSwap(Info* other);
  friend class ::PROTOBUF_NAMESPACE_ID::internal::AnyMetadata;
  static ::PROTOBUF_NAMESPACE_ID::StringPiece FullMessageName() {
    return "Info";
  }
  protected:
  explicit Info(::PROTOBUF_NAMESPACE_ID::Arena* arena);
  private:
  static void ArenaDtor(void* object);
  inline void RegisterArenaDtor(::PROTOBUF_NAMESPACE_ID::Arena* arena);
  public:

  ::PROTOBUF_NAMESPACE_ID::Metadata GetMetadata() const final;
  private:
  static ::PROTOBUF_NAMESPACE_ID::Metadata GetMetadataStatic() {
    return ::descriptor_table_demo_2eproto_metadata_getter(kIndexInFileMessages);
  }

  public:

  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------

  enum : int {
    kIdFieldNumber = 1,
  };
  // string id = 1;
  void clear_id();
  const std::string& id() const;
  void set_id(const std::string& value);
  void set_id(std::string&& value);
  void set_id(const char* value);
  void set_id(const char* value, size_t size);
  std::string* mutable_id();
  std::string* release_id();
  void set_allocated_id(std::string* id);
  private:
  const std::string& _internal_id() const;
  void _internal_set_id(const std::string& value);
  std::string* _internal_mutable_id();
  public:

  // @@protoc_insertion_point(class_scope:Info)
 private:
  class _Internal;

  template <typename T> friend class ::PROTOBUF_NAMESPACE_ID::Arena::InternalHelper;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr id_;
  mutable ::PROTOBUF_NAMESPACE_ID::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_demo_2eproto;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// DemoContainer

// repeated .DemoObject objects = 1;
inline int DemoContainer::_internal_objects_size() const {
  return objects_.size();
}
inline int DemoContainer::objects_size() const {
  return _internal_objects_size();
}
inline void DemoContainer::clear_objects() {
  objects_.Clear();
}
inline ::DemoObject* DemoContainer::mutable_objects(int index) {
  // @@protoc_insertion_point(field_mutable:DemoContainer.objects)
  return objects_.Mutable(index);
}
inline ::PROTOBUF_NAMESPACE_ID::RepeatedPtrField< ::DemoObject >*
DemoContainer::mutable_objects() {
  // @@protoc_insertion_point(field_mutable_list:DemoContainer.objects)
  return &objects_;
}
inline const ::DemoObject& DemoContainer::_internal_objects(int index) const {
  return objects_.Get(index);
}
inline const ::DemoObject& DemoContainer::objects(int index) const {
  // @@protoc_insertion_point(field_get:DemoContainer.objects)
  return _internal_objects(index);
}
inline ::DemoObject* DemoContainer::_internal_add_objects() {
  return objects_.Add();
}
inline ::DemoObject* DemoContainer::add_objects() {
  // @@protoc_insertion_point(field_add:DemoContainer.objects)
  return _internal_add_objects();
}
inline const ::PROTOBUF_NAMESPACE_ID::RepeatedPtrField< ::DemoObject >&
DemoContainer::objects() const {
  // @@protoc_insertion_point(field_list:DemoContainer.objects)
  return objects_;
}

// -------------------------------------------------------------------

// DemoObject

// .Info info = 1;
inline bool DemoObject::_internal_has_info() const {
  return this != internal_default_instance() && info_ != nullptr;
}
inline bool DemoObject::has_info() const {
  return _internal_has_info();
}
inline void DemoObject::clear_info() {
  if (GetArena() == nullptr && info_ != nullptr) {
    delete info_;
  }
  info_ = nullptr;
}
inline const ::Info& DemoObject::_internal_info() const {
  const ::Info* p = info_;
  return p != nullptr ? *p : reinterpret_cast<const ::Info&>(
      ::_Info_default_instance_);
}
inline const ::Info& DemoObject::info() const {
  // @@protoc_insertion_point(field_get:DemoObject.info)
  return _internal_info();
}
inline void DemoObject::unsafe_arena_set_allocated_info(
    ::Info* info) {
  if (GetArena() == nullptr) {
    delete reinterpret_cast<::PROTOBUF_NAMESPACE_ID::MessageLite*>(info_);
  }
  info_ = info;
  if (info) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_unsafe_arena_set_allocated:DemoObject.info)
}
inline ::Info* DemoObject::release_info() {
  
  ::Info* temp = info_;
  info_ = nullptr;
  if (GetArena() != nullptr) {
    temp = ::PROTOBUF_NAMESPACE_ID::internal::DuplicateIfNonNull(temp);
  }
  return temp;
}
inline ::Info* DemoObject::unsafe_arena_release_info() {
  // @@protoc_insertion_point(field_release:DemoObject.info)
  
  ::Info* temp = info_;
  info_ = nullptr;
  return temp;
}
inline ::Info* DemoObject::_internal_mutable_info() {
  
  if (info_ == nullptr) {
    auto* p = CreateMaybeMessage<::Info>(GetArena());
    info_ = p;
  }
  return info_;
}
inline ::Info* DemoObject::mutable_info() {
  // @@protoc_insertion_point(field_mutable:DemoObject.info)
  return _internal_mutable_info();
}
inline void DemoObject::set_allocated_info(::Info* info) {
  ::PROTOBUF_NAMESPACE_ID::Arena* message_arena = GetArena();
  if (message_arena == nullptr) {
    delete info_;
  }
  if (info) {
    ::PROTOBUF_NAMESPACE_ID::Arena* submessage_arena =
      ::PROTOBUF_NAMESPACE_ID::Arena::GetArena(info);
    if (message_arena != submessage_arena) {
      info = ::PROTOBUF_NAMESPACE_ID::internal::GetOwnedMessage(
          message_arena, info, submessage_arena);
    }
    
  } else {
    
  }
  info_ = info;
  // @@protoc_insertion_point(field_set_allocated:DemoObject.info)
}

// string name = 2;
inline void DemoObject::clear_name() {
  name_.ClearToEmpty();
}
inline const std::string& DemoObject::name() const {
  // @@protoc_insertion_point(field_get:DemoObject.name)
  return _internal_name();
}
inline void DemoObject::set_name(const std::string& value) {
  _internal_set_name(value);
  // @@protoc_insertion_point(field_set:DemoObject.name)
}
inline std::string* DemoObject::mutable_name() {
  // @@protoc_insertion_point(field_mutable:DemoObject.name)
  return _internal_mutable_name();
}
inline const std::string& DemoObject::_internal_name() const {
  return name_.Get();
}
inline void DemoObject::_internal_set_name(const std::string& value) {
  
  name_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArena());
}
inline void DemoObject::set_name(std::string&& value) {
  
  name_.Set(
    ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, ::std::move(value), GetArena());
  // @@protoc_insertion_point(field_set_rvalue:DemoObject.name)
}
inline void DemoObject::set_name(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  name_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, ::std::string(value), GetArena());
  // @@protoc_insertion_point(field_set_char:DemoObject.name)
}
inline void DemoObject::set_name(const char* value,
    size_t size) {
  
  name_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, ::std::string(
      reinterpret_cast<const char*>(value), size), GetArena());
  // @@protoc_insertion_point(field_set_pointer:DemoObject.name)
}
inline std::string* DemoObject::_internal_mutable_name() {
  
  return name_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArena());
}
inline std::string* DemoObject::release_name() {
  // @@protoc_insertion_point(field_release:DemoObject.name)
  return name_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArena());
}
inline void DemoObject::set_allocated_name(std::string* name) {
  if (name != nullptr) {
    
  } else {
    
  }
  name_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), name,
      GetArena());
  // @@protoc_insertion_point(field_set_allocated:DemoObject.name)
}

// string type = 3;
inline void DemoObject::clear_type() {
  type_.ClearToEmpty();
}
inline const std::string& DemoObject::type() const {
  // @@protoc_insertion_point(field_get:DemoObject.type)
  return _internal_type();
}
inline void DemoObject::set_type(const std::string& value) {
  _internal_set_type(value);
  // @@protoc_insertion_point(field_set:DemoObject.type)
}
inline std::string* DemoObject::mutable_type() {
  // @@protoc_insertion_point(field_mutable:DemoObject.type)
  return _internal_mutable_type();
}
inline const std::string& DemoObject::_internal_type() const {
  return type_.Get();
}
inline void DemoObject::_internal_set_type(const std::string& value) {
  
  type_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArena());
}
inline void DemoObject::set_type(std::string&& value) {
  
  type_.Set(
    ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, ::std::move(value), GetArena());
  // @@protoc_insertion_point(field_set_rvalue:DemoObject.type)
}
inline void DemoObject::set_type(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  type_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, ::std::string(value), GetArena());
  // @@protoc_insertion_point(field_set_char:DemoObject.type)
}
inline void DemoObject::set_type(const char* value,
    size_t size) {
  
  type_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, ::std::string(
      reinterpret_cast<const char*>(value), size), GetArena());
  // @@protoc_insertion_point(field_set_pointer:DemoObject.type)
}
inline std::string* DemoObject::_internal_mutable_type() {
  
  return type_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArena());
}
inline std::string* DemoObject::release_type() {
  // @@protoc_insertion_point(field_release:DemoObject.type)
  return type_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArena());
}
inline void DemoObject::set_allocated_type(std::string* type) {
  if (type != nullptr) {
    
  } else {
    
  }
  type_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), type,
      GetArena());
  // @@protoc_insertion_point(field_set_allocated:DemoObject.type)
}

// int32 count = 4;
inline void DemoObject::clear_count() {
  count_ = 0;
}
inline ::PROTOBUF_NAMESPACE_ID::int32 DemoObject::_internal_count() const {
  return count_;
}
inline ::PROTOBUF_NAMESPACE_ID::int32 DemoObject::count() const {
  // @@protoc_insertion_point(field_get:DemoObject.count)
  return _internal_count();
}
inline void DemoObject::_internal_set_count(::PROTOBUF_NAMESPACE_ID::int32 value) {
  
  count_ = value;
}
inline void DemoObject::set_count(::PROTOBUF_NAMESPACE_ID::int32 value) {
  _internal_set_count(value);
  // @@protoc_insertion_point(field_set:DemoObject.count)
}

// -------------------------------------------------------------------

// Info

// string id = 1;
inline void Info::clear_id() {
  id_.ClearToEmpty();
}
inline const std::string& Info::id() const {
  // @@protoc_insertion_point(field_get:Info.id)
  return _internal_id();
}
inline void Info::set_id(const std::string& value) {
  _internal_set_id(value);
  // @@protoc_insertion_point(field_set:Info.id)
}
inline std::string* Info::mutable_id() {
  // @@protoc_insertion_point(field_mutable:Info.id)
  return _internal_mutable_id();
}
inline const std::string& Info::_internal_id() const {
  return id_.Get();
}
inline void Info::_internal_set_id(const std::string& value) {
  
  id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArena());
}
inline void Info::set_id(std::string&& value) {
  
  id_.Set(
    ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, ::std::move(value), GetArena());
  // @@protoc_insertion_point(field_set_rvalue:Info.id)
}
inline void Info::set_id(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, ::std::string(value), GetArena());
  // @@protoc_insertion_point(field_set_char:Info.id)
}
inline void Info::set_id(const char* value,
    size_t size) {
  
  id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, ::std::string(
      reinterpret_cast<const char*>(value), size), GetArena());
  // @@protoc_insertion_point(field_set_pointer:Info.id)
}
inline std::string* Info::_internal_mutable_id() {
  
  return id_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArena());
}
inline std::string* Info::release_id() {
  // @@protoc_insertion_point(field_release:Info.id)
  return id_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArena());
}
inline void Info::set_allocated_id(std::string* id) {
  if (id != nullptr) {
    
  } else {
    
  }
  id_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), id,
      GetArena());
  // @@protoc_insertion_point(field_set_allocated:Info.id)
}

#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__
// -------------------------------------------------------------------

// -------------------------------------------------------------------


// @@protoc_insertion_point(namespace_scope)


PROTOBUF_NAMESPACE_OPEN

template <> struct is_proto_enum< ::MyEnum> : ::std::true_type {};
template <>
inline const EnumDescriptor* GetEnumDescriptor< ::MyEnum>() {
  return ::MyEnum_descriptor();
}

PROTOBUF_NAMESPACE_CLOSE

// @@protoc_insertion_point(global_scope)

#include <google/protobuf/port_undef.inc>
#endif  // GOOGLE_PROTOBUF_INCLUDED_GOOGLE_PROTOBUF_INCLUDED_demo_2eproto