
/**
 * AUTO-GENERATED FILE @ 2016-12-07 13:17:46 - DO NOT EDIT!
 *
 * This file was generated with schemats node package:
 * $ schemats generate -c mysql://username:password@localhost/test -o ./test/osmMysql.ts -t users -s test
 *
 * Re-run the command above.
 *
 */

export type enum_enum_col = 'enum1' | 'enum2' | 'enum3';
export type enum_nullable_enum_col = 'enum1' | 'enum2' | 'enum3';
export type set_set_col = 'set1' | 'set2' | 'set3';
export type set_nullable_set_col = 'set1' | 'set2' | 'set3';

export namespace usersFields {
    export type char_col = string;
    export type nullable_char_col = string | null;
    export type binary_col = string;
    export type nullable_binary_col = string | null;
    export type varbinary_col = string;
    export type nullable_varbinary_col = string | null;
    export type blob_col = string;
    export type nullable_blob_col = string | null;
    export type text_col = string;
    export type nullable_text_col = string | null;
    export type mediumtext_col = string;
    export type nullable_mediumtext_col = string | null;
    export type integer_col = number;
    export type nullable_integer_col = number | null;
    export type int_col = number;
    export type nullable_int_col = number | null;
    export type smallint_col = number;
    export type nullable_smallint_col = number | null;
    export type mediumint_col = number;
    export type nullable_mediumint_col = number | null;
    export type bigint_col = number;
    export type nullable_bigint_col = number | null;
    export type double_col = number;
    export type nullable_double_col = number | null;
    export type decimal_col = number;
    export type nullable_decimal_col = number | null;
    export type numeric_col = number;
    export type nullable_numeric_col = number | null;
    export type float_col = number;
    export type nullable_float_col = number | null;
    export type bit_col = number;
    export type nullable_bit_col = number | null;
    export type tinyint_col = boolean;
    export type nullable_tinyint_col = boolean | null;
    export type json_col = Object;
    export type nullable_json_col = Object | null;
    export type date_col = Date;
    export type nullable_date_col = Date | null;
    export type datetime_col = Date;
    export type nullable_datetime_col = Date | null;
    export type timestamp_col = Date;
    export type nullable_timestamp_col = Date | null;
    export type time_col = Date;
    export type nullable_time_col = Date | null;
    export type year_col = Date;
    export type nullable_year_col = Date | null;
    export type enum_col = enum_enum_col;
    export type nullable_enum_col = enum_nullable_enum_col | null;
    export type set_col = set_set_col;
    export type nullable_set_col = set_nullable_set_col | null;

}

export interface users {
    char_col: usersFields.char_col;
    nullable_char_col: usersFields.nullable_char_col;
    binary_col: usersFields.binary_col;
    nullable_binary_col: usersFields.nullable_binary_col;
    varbinary_col: usersFields.varbinary_col;
    nullable_varbinary_col: usersFields.nullable_varbinary_col;
    blob_col: usersFields.blob_col;
    nullable_blob_col: usersFields.nullable_blob_col;
    text_col: usersFields.text_col;
    nullable_text_col: usersFields.nullable_text_col;
    mediumtext_col: usersFields.mediumtext_col;
    nullable_mediumtext_col: usersFields.nullable_mediumtext_col;
    integer_col: usersFields.integer_col;
    nullable_integer_col: usersFields.nullable_integer_col;
    int_col: usersFields.int_col;
    nullable_int_col: usersFields.nullable_int_col;
    smallint_col: usersFields.smallint_col;
    nullable_smallint_col: usersFields.nullable_smallint_col;
    mediumint_col: usersFields.mediumint_col;
    nullable_mediumint_col: usersFields.nullable_mediumint_col;
    bigint_col: usersFields.bigint_col;
    nullable_bigint_col: usersFields.nullable_bigint_col;
    double_col: usersFields.double_col;
    nullable_double_col: usersFields.nullable_double_col;
    decimal_col: usersFields.decimal_col;
    nullable_decimal_col: usersFields.nullable_decimal_col;
    numeric_col: usersFields.numeric_col;
    nullable_numeric_col: usersFields.nullable_numeric_col;
    float_col: usersFields.float_col;
    nullable_float_col: usersFields.nullable_float_col;
    bit_col: usersFields.bit_col;
    nullable_bit_col: usersFields.nullable_bit_col;
    tinyint_col: usersFields.tinyint_col;
    nullable_tinyint_col: usersFields.nullable_tinyint_col;
    json_col: usersFields.json_col;
    nullable_json_col: usersFields.nullable_json_col;
    date_col: usersFields.date_col;
    nullable_date_col: usersFields.nullable_date_col;
    datetime_col: usersFields.datetime_col;
    nullable_datetime_col: usersFields.nullable_datetime_col;
    timestamp_col: usersFields.timestamp_col;
    nullable_timestamp_col: usersFields.nullable_timestamp_col;
    time_col: usersFields.time_col;
    nullable_time_col: usersFields.nullable_time_col;
    year_col: usersFields.year_col;
    nullable_year_col: usersFields.nullable_year_col;
    enum_col: usersFields.enum_col;
    nullable_enum_col: usersFields.nullable_enum_col;
    set_col: usersFields.set_col;
    nullable_set_col: usersFields.nullable_set_col;

}
