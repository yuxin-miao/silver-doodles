using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;
public class PlayerController : MonoBehaviour
{
  private Rigidbody2D rb;
  [SerializeField] private Animator anim;
  public float speed;
  public float jumpforce;
  public Collider2D coll;
  public Collider2D disColl;
  public LayerMask ground;
  public int cherrynum = 0;
  public Transform cellCheck;
  public Text CherryCollect;
  public AudioSource jumpAudio, hurtAudio, cherryAudio;
  private bool isHurt = false;
  // Start is called before the first frame update
  void Start()
  {
    rb = GetComponent<Rigidbody2D>();
    anim = GetComponent<Animator>();
  }

  // Update is called once per frame


  void FixedUpdate()
  {
    if (!isHurt)
    {
      Movement();
    }
    SwitchAnim();
  }
  void Movement()
  {
    float horizontalMove = Input.GetAxis("Horizontal");
    float faceDirection = Input.GetAxisRaw("Horizontal");
    float verticalMove = Input.GetAxis("Vertical");
    // player horizontal move 
    if (horizontalMove != 0)
    {
      rb.velocity = new Vector2(horizontalMove * speed * Time.fixedDeltaTime, rb.velocity.y);
      anim.SetBool("running", faceDirection != 0 ? true : false);
    }
    // player face direction 
    if (faceDirection != 0)
    {
      transform.localScale = new Vector3(faceDirection, 1, 1);
    }
    // player jump, when user click jump button 
    if (Input.GetButtonDown("Jump") && coll.IsTouchingLayers(ground))
    {
      rb.velocity = new Vector2(rb.velocity.x, jumpforce * Time.fixedDeltaTime);
      anim.SetBool("jumping", true);
      jumpAudio.Play();
    }
    if (verticalMove < 0)
    {
      anim.SetBool("crouching", true);
      disColl.enabled = false;
    }
    if (verticalMove == 0 && !Physics2D.OverlapCircle(cellCheck.position, 0.2f, ground))
    {
      anim.SetBool("crouching", false);
      disColl.enabled = true;

    }
  }

  void SwitchAnim()
  {
    if (rb.velocity.y < 0.1f && !coll.IsTouchingLayers(ground))
    {
      anim.SetBool("falling", true);
    }
    if (anim.GetBool("jumping"))
    {
      // begin to fall
      if (rb.velocity.y < 0)
      {
        anim.SetBool("jumping", false);
        anim.SetBool("falling", true);
      }
    }
    else if (isHurt)
    {
      hurtAudio.Play();
      anim.SetBool("hurt", true);
      anim.SetBool("running", false);
      if (Mathf.Abs(rb.velocity.x) < 0.1)
      {
        isHurt = false;
        anim.SetBool("hurt", false);
      }
    }
    else if (coll.IsTouchingLayers(ground))
    {
      anim.SetBool("falling", false);
    }
  }
  // collection collision 
  private void OnTriggerEnter2D(Collider2D collision)
  {
    if (collision.tag == "Collection")
    {
      cherryAudio.Play();
      Destroy(collision.gameObject);
      cherrynum += 1;
      CherryCollect.text = cherrynum.ToString();
    }
  }
  // enemy collection 
  private void OnCollisionEnter2D(Collision2D collision)
  {
    if (collision.gameObject.tag == "Enemy")
    {
      Enemy enemy = collision.gameObject.GetComponent<Enemy>();
      if (anim.GetBool("falling"))
      {
        enemy.JumpOn();
        rb.velocity = new Vector2(rb.velocity.x, jumpforce * Time.fixedDeltaTime);
        anim.SetBool("jumping", true);
      }
      else if (transform.position.x < collision.gameObject.transform.position.x)
      {
        isHurt = true;
        rb.velocity = new Vector2(-10, rb.velocity.y);
      }
      else if (transform.position.x > collision.gameObject.transform.position.x)
      {
        isHurt = true;
        rb.velocity = new Vector2(10, rb.velocity.y);
      }
    }


  }

}


