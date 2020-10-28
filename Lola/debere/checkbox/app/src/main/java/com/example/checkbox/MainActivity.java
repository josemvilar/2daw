package com.example.checkbox;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.Typeface;
import android.os.Bundle;
import android.view.View;
import android.widget.CheckBox;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    CheckBox c1,c2,c3,c4,c5,c6;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        c1 = (CheckBox) findViewById(R.id.checkBox1);
        c2 = (CheckBox) findViewById(R.id.checkBox2);
        c3 = (CheckBox) findViewById(R.id.checkBox3);
        c4 = (CheckBox) findViewById(R.id.checkBox4);
        c5 = (CheckBox) findViewById(R.id.checkBox5);
        c6 = (CheckBox) findViewById(R.id.checkBox6);




        final TextView respuesta = (TextView) findViewById(R.id.tv);
            String texto = respuesta.getText().toString();

        Typeface face=Typeface.createFromAsset(getAssets(),"fonts/fuente.ttf");
        respuesta.setTypeface(face);


                        c2.setOnClickListener(new View.OnClickListener() {
                            @Override
                            public void onClick(View view) {
                                if (c2.isChecked()){
                                    respuesta.setText(respuesta.getText()+"El Lobo de Wall Street\n");
                                }else{
                                    respuesta.setText(respuesta.getText().toString().replace("El Lobo de Wall Street\n",""));
                                }
                                c1.setOnClickListener(new View.OnClickListener() {
                                    @Override
                                    public void onClick(View view) {
                                        if (c1.isChecked()) {
                                            respuesta.setText(respuesta.getText()+"Interestellar\n");
                                        } else {
                                            respuesta.setText(respuesta.getText().toString().replace("Interestellar\n",""));
                                        }
                                c3.setOnClickListener(new View.OnClickListener() {
                                    @Override
                                    public void onClick(View view) {
                                        if (c3.isChecked()){
                                            respuesta.setText(respuesta.getText()+"Hercules\n");
                                        }else{
                                            respuesta.setText(respuesta.getText().toString().replace("Hercules\n",""));
                                        }
                                        c4.setOnClickListener(new View.OnClickListener() {
                                            @Override
                                            public void onClick(View view) {
                                                if (c4.isChecked()){
                                                    respuesta.setText(respuesta.getText()+"Guardianes de las galaxias\n");
                                                }else{
                                                    respuesta.setText(respuesta.getText().toString().replace("Guardianes de las galaxias\n",""));
                                                }
                                                c5.setOnClickListener(new View.OnClickListener() {
                                                    @Override
                                                    public void onClick(View view) {
                                                        if(c5.isChecked()){
                                                            respuesta.setText(respuesta.getText()+"Como entrenar a tu dragon\n");
                                                        }else{
                                                            respuesta.setText(respuesta.getText().toString().replace("Como entrenar a tu dragon\n",""));
                                                        }
                                                        c6.setOnClickListener(new View.OnClickListener() {
                                                            @Override
                                                            public void onClick(View view) {
                                                                if(c6.isChecked()){
                                                                    respuesta.setText(respuesta.getText()+"Ocho apellidos Vascos\n");
                                                                }else{
                                                                    respuesta.setText(respuesta.getText().toString().replace("Ocho apellidos Vascos\n",""));
                                                                }
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });

        }
    }
